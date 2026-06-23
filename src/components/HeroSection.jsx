import { useEffect, useState } from "react";

function HeroSection() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/api/waitlist/count")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.total_waitlist_users);
      });
  }, []);

  return (
    <div>
      <h2>
        Join <span>{count}</span> People Already Registered
      </h2>
    </div>
  );
}

export default HeroSection;