'use server';
 
import Event from '@/database/event.model';
import connectDB from "@/lib/mongodb";
import { unstable_noStore as noStore } from "next/cache";
 
export const getAllEvents = async () => {
    noStore();
    try {
        await connectDB();
        const events = await Event.find().sort({ createdAt: -1 }).lean();
        return JSON.parse(JSON.stringify(events));
    } catch {
        return [];
    }
}
 
export const getEventBySlug = async (slug: string) => {
    noStore();
    try {
        await connectDB();
        const event = await Event.findOne({ slug }).lean();
        return JSON.parse(JSON.stringify(event));
    } catch {
        return null;
    }
}
 
export const getSimilarEventsBySlug = async (slug: string) => {
    noStore();
    try {
        await connectDB();
        const event = await Event.findOne({ slug });
        if (!event) return [];
        return JSON.parse(JSON.stringify(
            await Event.find({
                _id: { $ne: event._id },
                tags: { $in: event.tags }
            }).lean()
        ));
    } catch {
        return [];
    }
}