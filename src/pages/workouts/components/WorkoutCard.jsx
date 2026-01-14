import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaDumbbell, FaBookmark, FaCheck } from 'react-icons/fa';
import { useRoutine } from '../../../context/RoutineContext';

// Shadcn komponentləri
import { Button } from "@/components/ui/shared/button";
import { Badge } from "@/components/ui/shared/badge";
import { Card, CardContent } from "@/components/ui/shared/card";

const WorkoutCard = ({ data }) => {
  if (!data) return null;

  const { addRoutine, myRoutines } = useRoutine();

  const { id, title, thumbnail, image, meta } = data;
  const displayImage = thumbnail || image;

  const isSaved = myRoutines.some(routine => routine.id === id);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isSaved) {
      addRoutine(data);
    }
  };

  return (
    <Link
      to={`/workouts/${id}`}
      className="group relative block h-[400px] w-full overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-2"
    >
      <Card className="h-full w-full bg-zinc-900 border-0 overflow-hidden">
        <CardContent className="p-0 h-full relative">
          {/* Arxa Fon Şəkli */}
          <div className="absolute inset-0">
            <img
              src={displayImage}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          {/* SAVE BUTTON */}
          <Button
            onClick={handleSave}
            variant="ghost"
            size="icon"
            className={`absolute top-4 right-4 z-20 rounded-full backdrop-blur-md border transition-all duration-300 group/btn p-3 h-12 w-12
              ${isSaved
                ? 'bg-neon-green text-black border-neon-green hover:bg-neon-green/90'
                : 'bg-black/30 text-white border-white/20 hover:bg-neon-green hover:text-black hover:border-neon-green'
              }`}
            title={isSaved ? "Already in your plans" : "Save to My Plans"}
          >
            {isSaved ? <FaCheck size={18} /> : <FaBookmark size={18} />}
          </Button>

          {/* Kart məlumatları */}
          <div className="absolute bottom-0 left-0 w-full p-6 text-white">
            {/* Etiketlər */}
            <div className="mb-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider">
              <Badge
                className={`
                  rounded px-2 py-1 text-xs font-semibold uppercase tracking-wider
                  ${getLevelBadgeClass(meta.level)}
                `}
              >
                {meta.level}
              </Badge>

              <Badge
                variant="outline"
                className="rounded bg-white/20 px-2 py-1 backdrop-blur-sm border-white/20 text-white"
              >
                {meta.goal}
              </Badge>
            </div>

            {/* Başlıq */}
            <h3 className="mb-1 text-2xl font-bold leading-tight group-hover:text-neon-green transition-colors">
              {title}
            </h3>

            <p className="mb-4 text-sm text-gray-300">by {meta.author}</p>

            {/* Alt detallar */}
            <div className="flex items-center justify-between border-t border-white/20 pt-4 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <FaClock className="text-neon-green" />
                <span>{meta.days} Days/Week</span>
              </div>
              <div className="flex items-center gap-1">
                <FaDumbbell className="text-neon-green" />
                <span>{meta.equipment}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

// Səviyyəyə görə rəng class-ları (daha güclü override)
const getLevelBadgeClass = (level) => {
  const lower = level?.toLowerCase?.() || '';

  if (lower === 'beginner') {
    return 'bg-green-600/80 hover:bg-green-600/90 text-white';
  }
  if (lower === 'intermediate') {
    return 'bg-yellow-500/80 hover:bg-yellow-500/90 text-black';
  }
  if (lower === 'advanced') {
    return 'bg-red-600/80 hover:bg-red-600/90 text-white';
  }
  return 'bg-gray-600/80 hover:bg-gray-600/90 text-white';
};

export default WorkoutCard;