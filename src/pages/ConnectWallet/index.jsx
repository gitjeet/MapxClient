import styles, { layout } from "../../style";
import Button from "./Button";

const feature = [
  { icon: "and", title: "Helllo", content: "ndsnsnd", index: 0 },
];

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const ConnectWallet = () => (
  <div className={`bg-primary ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <section id="features" className={`${layout.section}`}>
        <div className={layout.sectionInfo}>
          <img src="https://s3-alpha-sig.figma.com/img/b6d9/35f1/0d29b7a16514adcc0f308a58047cb668?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QrZjPS3c3BGAsGg29h3WfA2wZXLjiL~BORheu36~IGzHfU9wyh9f3hlVSf4NQVnURotuaqrf7UwiKdE8kG9rgcOLf2-YsAHwks9FGyaXvFhA~lpB6V0BggaUVzVgWrKdxIAWsPQHzBNxhbbI8265Fh88caRgmZMU7zHdm0tnHvvB31gT3GMfe5iENBdZfeMuKiYT-QT2MFAuxVuJbvhVKOoYEtn8~zo2-lxLWk7fTP3wL9-8rhVpKwifMGsK3EDZDVCNrKBlgrgRGN1tp7vfKi~47K1FlFU79~JsFfynMIJOA~wXwCM5WeThlmoWOM2AvlS0bWNE-sObhHd90x727w__" />
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default ConnectWallet;
