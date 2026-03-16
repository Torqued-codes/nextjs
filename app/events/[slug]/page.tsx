import EventDetails from "@/components/EventDetails";

export const dynamic = 'force-dynamic';
 
const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
 
    return (
        <main>
            <EventDetails params={slug} />
        </main>
    );
}
 
export default EventDetailsPage;
 