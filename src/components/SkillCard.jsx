import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const SkillCard = ({path="#", text=""}) => {
    return (
        <div className="hover:bg-primary_grey dark:hover:bg-secondary_black px-2 py-2 transition text-center ">
            <LazyLoadImage effect="blur" className="h-20 text-4xl mx-auto mb-4" src={path} />
            <span className="text-center block text-xs">{text}</span>
        </div>
      );
}
 
export default SkillCard;