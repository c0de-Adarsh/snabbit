export default function PhoneMockup({ className = "", children }) {
  return (
    <div className={`phone-float ${className}`}>
      <svg 
        width="300" 
        height="600" 
        viewBox="0 0 300 600" 
        className="mx-auto"
      >
        {/* Phone Frame */}
        <rect
          x="10"
          y="10"
          width="280"
          height="580"
          rx="40"
          ry="40"
          fill="#000"
          stroke="#333"
          strokeWidth="2"
        />
        
        {/* Screen */}
        <rect
          x="20"
          y="50"
          width="260"
          height="500"
          rx="30"
          ry="30"
          fill="#8B5A83"
        />
        
        {/* Notch */}
        <rect
          x="100"
          y="20"
          width="100"
          height="20"
          rx="10"
          ry="10"
          fill="#000"
        />
        
        {/* Screen Content */}
        <text
          x="150"
          y="320"
          textAnchor="middle"
          fill="white"
          fontSize="24"
          fontWeight="bold"
        >
          Snabbit
        </text>
        
        {children}
      </svg>
    </div>
  )
}