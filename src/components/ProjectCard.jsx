const ProjectCard = ({ title, description, image, github, demo }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded mb-2"
          />
        )}
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-zinc-700 mb-2">{description}</p>
        <div className="flex justify-between">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline text-sm"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  