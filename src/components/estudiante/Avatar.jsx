const Avatar = ({ avatar_url, h = 68, w = 68 }) => {
  return (
    <img
      src={avatar_url}
      alt="avatar_equipo"
      className="object-cover"
      style={{
        clipPath: "circle(50% at 50% 50%)", // Aplicar la máscara circular
        height: `${h}px`,
        width: `${w}px`,
      }}
    />
  );
};

export default Avatar;
