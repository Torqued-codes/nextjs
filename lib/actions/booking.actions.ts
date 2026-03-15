'use server';
 
import Booking from '@/database/booking.model';
import connectDB from "@/lib/mongodb";
 
export const createBooking = async ({ eventId, slug, email }: { eventId: string; slug: string; email: string }) => {
    try {
        await connectDB();
 
        // slug is not stored in booking, only used for revalidation
        await Booking.create({ eventId, email });
 
        return { success: true };
    } catch (e) {
        console.error('create booking failed', e);
        return { success: false };
    }
};
 