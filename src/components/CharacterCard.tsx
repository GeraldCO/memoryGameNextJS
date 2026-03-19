export default function CharacterCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-md">
      <img src={image} alt={name} className="h-24 w-24 rounded-full object-cover" />
      <p className="text-sm font-medium text-gray-800">{name}</p>
    </div>
  );
}