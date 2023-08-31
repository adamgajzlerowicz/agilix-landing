import * as React from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function WithBox({ children, title }: Props) {
  return (
    <div
      className="rounded rounded rounded-2xl p-12 text-black bg-slate-300 mt-1
  hover:mt-0 transition-all ease-in-out w-full max-w-md m-auto shadow-2xl duration-500">
      <span className="text-2xl text-center">{title}</span>

      <div className="w-full border-dashed border-gray-600 border-b-2 p-4" />

      {children}

      <div className="mt-14 flex justify-center">Pobierz aplikacje</div>
    </div>
  );
}
