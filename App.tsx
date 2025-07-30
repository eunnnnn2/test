
import React, { useState } from 'react';
import { Student } from './types';
import StudentCard from './components/StudentCard';

const initialStudents: Student[] = [
  { id: 1, name: '김민준', stickerCount: 3 },
  { id: 2, name: '이서연', stickerCount: 5 },
  { id: 3, name: '박하준', stickerCount: 1 },
  { id: 4, name: '최지우', stickerCount: 7 },
];

function App() {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const handleAddSticker = (studentId: number) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId
          ? { ...student, stickerCount: student.stickerCount + 1 }
          : student
      )
    );
  };

  return (
    <div className="bg-sky-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
            칭찬 스티커 보드
          </h1>
          <p className="text-lg text-gray-600">
            '참 잘했어요!' 스티커로 학생들을 격려해주세요.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {students.map(student => (
              <StudentCard
                key={student.id}
                student={student}
                onAddSticker={handleAddSticker}
              />
            ))}
          </div>
        </main>
        
        <footer className="text-center mt-12 text-gray-500">
            <p>&copy; {new Date().getFullYear()} Digital Praise Board. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
