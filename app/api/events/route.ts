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
 
        const file = formData.get('image') as File;
        if (!file) {
            return NextResponse.json(
                { message: 'Image file is required' },
                { status: 400 }
            );
        }
 
        // Convert file to base64
        const arrayBuffer = await file.arrayBuffer();
        const base64String = Buffer.from(arrayBuffer).toString('base64');
        const mimeType = file.type;
        const dataUri = `data:${mimeType};base64,${base64String}`;
 
        // Upload using base64
        const uploadResult = await cloudinary.uploader.upload(dataUri, {
            folder: 'TorqEvent',
            resource_type: 'image',
        });
 
        const imageUrl = uploadResult.secure_url;
 
        const eventData = {
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            overview: formData.get('overview') as string,
            image: imageUrl,
            venue: formData.get('venue') as string,
            location: formData.get('location') as string,
            date: formData.get('date') as string,
            time: formData.get('time') as string,
            mode: formData.get('mode') as string,
            audience: formData.get('audience') as string,
            agenda: formData.getAll('agenda') as string[],
            organizer: formData.get('organizer') as string,
            tags: formData.getAll('tags') as string[],
        };
 
        const createdEvent = await Event.create(eventData);
 
        return NextResponse.json(
            { message: 'Event created properly', event: createdEvent },
            { status: 201 }
        );
 
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            {
                message: 'Event Creation Didnt Work',
                error: e instanceof Error ? e.message : 'Unknown',
            },
            { status: 500 }
        );
    }
}
 
export async function GET() {
    try {
        await connectDB();
 
        const events = await Event.find().sort({ createdAt: -1 });
 
        return NextResponse.json(
            { message: 'Event list done', events },
            { status: 200 }
        );
 
    } catch (e) {
        return NextResponse.json(
            { message: 'Event fetching didnt happen', error: e instanceof Error ? e.message : 'Unknown' },
            { status: 400 }
        );
    }
}