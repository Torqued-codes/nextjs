import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
import connectDB from "@/lib/mongodb";
import Event from '@/database/event.model';
 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});
 
export async function POST(req: NextRequest) {
    try {
        await connectDB();
 
        const formData = await req.formData();
 
        const file = formData.get('image');
 
        if (!file || typeof file === 'string') {
            return NextResponse.json(
                { message: 'Image file is required' },
                { status: 400 }
            );
        }
 
        // Get tags and agenda as arrays
        const tags = formData.getAll('tags') as string[];
        const agenda = formData.getAll('agenda') as string[];
 
        // Convert file to base64
        const arrayBuffer = await (file as File).arrayBuffer();
        const base64String = Buffer.from(arrayBuffer).toString('base64');
        const mimeType = (file as File).type || 'image/png';
        const dataUri = `data:${mimeType};base64,${base64String}`;
 
        // Upload to cloudinary
        const uploadResult = await cloudinary.uploader.upload(dataUri, {
            resource_type: 'image',
            folder: 'DevEvent',
        });
 
        const imageUrl = uploadResult.secure_url;
 
        // Create event with all fields
        const createdEvent = await Event.create({
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            overview: formData.get('overview') as string,
            image: imageUrl,
            venue: formData.get('venue') as string,
            location: formData.get('location') as string,
            date: formData.get('date') as string,
            time: formData.get('time') as string,
            mode: (formData.get('mode') as string)?.toLowerCase(),
            audience: formData.get('audience') as string,
            agenda,
            organizer: formData.get('organizer') as string,
            tags,
        });
 
        return NextResponse.json(
            { message: 'Event created successfully', event: createdEvent },
            { status: 201 }
        );
 
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { message: 'Event Creation Failed', error: e instanceof Error ? e.message : 'Unknown' },
            { status: 500 }
        );
    }
}
 
export async function GET() {
    try {
        await connectDB();
 
        const events = await Event.find().sort({ createdAt: -1 });
 
        return NextResponse.json(
            { message: 'Events fetched successfully', events },
            { status: 200 }
        );
 
    } catch (e) {
        return NextResponse.json(
            { message: 'Event fetching failed', error: e instanceof Error ? e.message : 'Unknown' },
            { status: 500 }
        );
    }
}