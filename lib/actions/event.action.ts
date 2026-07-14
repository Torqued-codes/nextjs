'use server';
 
import Event from '@/database/event.model';
import connectDB from "@/lib/mongodb";
import { unstable_noStore as noStore } from "next/cache";
 
export const getAllEvents = async () => {
    noStore();
    try {
        await connectDB();
        const events = await Event.find().sort({ createdAt: -1 }).lean();
        console.log('[getAllEvents] found', events.length, 'events');
        return JSON.parse(JSON.stringify(events));
    } catch (error) {
        console.error('[getAllEvents] error:', error);
        return [];
    }
}
 
export const getEventBySlug = async (slug: string) => {
    noStore();
    try {
        await connectDB();
        const event = await Event.findOne({ slug }).lean();
        console.log('[getEventBySlug]', slug, event ? 'found' : 'NOT FOUND');
        return JSON.parse(JSON.stringify(event));
    } catch (error) {
        console.error('[getEventBySlug] error:', error);
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
    } catch (error) {
        console.error('[getSimilarEventsBySlug] error:', error);
        return [];
    }
}