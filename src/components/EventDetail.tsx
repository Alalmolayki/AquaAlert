import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { ArrowLeft } from 'lucide-react';

interface Image {
  src: string;
  width: number;
  height: number;
  title: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  logo?: string;
  images: Image[];
}

interface EventDetailProps {
  events: Event[];
}

const EventDetail: React.FC<EventDetailProps> = ({ events }) => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [index, setIndex] = useState(-1);

  const event = events.find(e => e.id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  const images = event.images.slice(0, 5).map(image => ({
    ...image,
    customOverlay: (
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
        <p className="text-sm">{image.title}</p>
      </div>
    ),
  }));

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-blue-600 hover:text-blue-500"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Geri Dön
          </button>
          
          
        </div>

        {/* Event Logo */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          {event.logo && (
            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
              <img 
                src={event.logo} 
                alt={`${event.title} Logo`} 
                className="w-full h-full object-cover "
                style={{ transform: "scale(4)", transformOrigin: "center" }}
              />
            </div>  
          )}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{event.title}</h1>
            <p className="text-blue-600 mb-4">{event.date}</p>
            <p className="text-gray-600">{event.description}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Etkinlik Fotoğrafları</h2>
          <Gallery
            images={images}
            onClick={(index) => setIndex(index)}
            enableImageSelection={false}
          />
          <Lightbox
            slides={event.images}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetail;