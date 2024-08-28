
import { styles } from "../../styles";
import { socialLinks} from "../../constants/index";
import { Link } from "react-router-dom";

const Hero = () =>
{

  return (
    <section className={ `relative w-full h-screen mx-auto` }>
      <div
        className={ `absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5` }
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={ `${styles.heroHeadText} text-white` }>
            Hi, I'm <span className='text-[#915EFF]'>Eslam Ashraf</span>
          </h1>
          <p className={ `${styles.heroSubText} mt-2 text-white-100` }>
            I am a recent graduate in Computer Engineering  <br className='sm:block hidden' />
            from Cairo University
          </p>
          <div className={ `${styles.heroSubText} mt-8 text-white flex gap-5 flex-wrap` }>
            { socialLinks.map( ( social )  =>
            (
              <div className='w-fit text-[18px] font-small green-pink-gradient p-[1px] rounded-[20px] shadow-card' key={social.id}>
                <Link to={social.link} target="_blank">
                  <button className='bg-tertiary rounded-[20px] py-3 px-6  flex gap-2  items-center justify-center h-[64px]'  >
                    { social.icon && <img className='w-8 h-8 object-contain' src={ social.icon }></img> }
                    {social.title}
                  </button>
                </Link>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;