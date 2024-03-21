import {
  SectionTitleStyle,
  SectionTitleWrapperStyle,
} from "./SectionTitle.style";

export const SectionTitle = ({ title, subtitle, isCenter, ...props }) => {
  return (
    <SectionTitleStyle {...props} className="section_title">
      {subtitle }
      {title && <h2>{title}</h2>}
    </SectionTitleStyle>
  );
};

export const SectionTitleWrapper = ({ children }) => {
  return (
    <SectionTitleWrapperStyle className="section_title_wrapper">
      {children}
    </SectionTitleWrapperStyle>
  );
};
