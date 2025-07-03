export default function ServiceCard({ title, image, className = "" }) {
  return (
    <div className={`service-card bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl ${className}`}>
      <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=400'
          }}
        />
      </div>
      <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
    </div>
  )
}