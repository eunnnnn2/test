
import React from 'react';
import { Student } from '../types';
import StickerIcon from './StickerIcon';

interface StudentCardProps {
  student: Student;
  onAddSticker: (id: number) => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onAddSticker }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 w-full max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{student.name}</h2>
        <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 font-bold py-1 px-3 rounded-full">
          <StickerIcon className="w-5 h-5" />
          <span>{student.stickerCount}</span>
        </div>
      </div>
      
      <div className="bg-blue-50/50 rounded-lg p-4 min-h-[140px] mb-4">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: student.stickerCount }).map((_, index) => (
            <StickerIcon key={index} />
          ))}
          {student.stickerCount === 0 && (
             <p className="text-gray-500 text-center w-full self-center p-8">스티커를 붙여주세요!</p>
          )}
        </div>
      </div>

      <button
        onClick={() => onAddSticker(student.id)}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        칭찬 스티커 주기
      </button>
    </div>
  );
};

export default StudentCard;
