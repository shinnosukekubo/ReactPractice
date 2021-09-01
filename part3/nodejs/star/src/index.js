import React, { useState } from "react";
import { render } from "react-dom";
import { FaStar } from "react-icons/fa";
import { StarRating } from "./components/StarRating";

// export default function App() {
//     return <StarRating style={{ backgroundColor: "lightblue"}} onDoubleClick={e => alert("double click")} />;
// }

// const Star = ({selected = false, onSelect = f => f}) => (
//     <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
// );

// export default function StarRating({ style = {}, totalStars = 5, ...props}) {
//     const [selectedStars, setSelectedStars] = useState(0);
//     return (
//         <div style={{ padding: "5px", ...style}} {...props}>
//         {[...Array(totalStars)].map((n, i) => (
//         <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i+1)} />
//         ))}
//         <p>
//             {selectedStars} of {totalStars} stars
//         </p>
//         </div>
//     );
// };

render(<StarRating style={{ backgroundColor: "lightblue"}} totalStars={10} onDoubleClick={e => alert("double click")} />, document.getElementById("root"));