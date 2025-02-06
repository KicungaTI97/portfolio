import { useContext, useState } from 'react';
import {
  Briefcase, Search, Star, LayoutGrid, LayoutList,
  ExternalLinkIcon,
  GithubIcon
} from 'lucide-react';

import { ProjectButton } from '../../components/projects/projectButton';
import { DataContext } from '../../context/dataContext';
import { useScroll, useSpring, motion } from 'framer-motion';

type ViewMode = 'grid' | 'list'
// Main Component
export default function ProjectsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const [bookmarkedProjects, setBookmarkedProjects] = useState<number[]>([]);

  const {scrollYProgress} = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const {projects} = useContext(DataContext)

  // Get all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );

  // Filter projects based on search and tags
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 ||
                       selectedTags.every(tag => project.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  // Toggle project expansion
  const toggleProjectExpansion = (projectId: number) => {
    setExpandedProjects(prev => 
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  // Toggle project bookmark
  const toggleProjectBookmark = (projectId: number) => {
    setBookmarkedProjects(prev =>
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <>
    <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" style={{ scaleX }}/>
    <section className="py-20 px-4 " id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center">
            <Briefcase className="mr-2" /> Projetos
          </h2>
          
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-full px-4 py-2 pl-10 text-white focus:outline-none focus:border-pink-500 w-64"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
            </div>
            
            {/* View Toggle */}
            <div className="flex rounded-full bg-white/10 p-1">
              <button
                onClick={() => setViewMode('grid')}
                title='button View Mode Grid'
                className={`p-2 rounded-full transition ${
                  viewMode === 'grid' ? 'bg-pink-500 text-white' : 'text-white/60'
                }`}
              >
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                title='button View Mode Grid'
                className={`p-2 rounded-full transition ${
                  viewMode === 'list' ? 'bg-pink-500 text-white' : 'text-white/60'
                }`}
              >
                <LayoutList size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                selectedTags.includes(tag)
                  ? 'bg-pink-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid/List */}
        <div className={`
          ${viewMode === 'grid'
            ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
            : 'space-y-8'
          }
        `}>
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`
                bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden
                group hover:transform hover:scale-105 transition duration-300
                ${viewMode === 'list' ? 'flex gap-6' : ''}
              `}
            >
              {/* Project Image */}
              <div className={`relative ${viewMode === 'list' ? 'w-64' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 space-x-2 ">
                  <button
                    onClick={() => toggleProjectBookmark(project.id)}
                    title='button Bookmark'
                    className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition "
                  >
                    <Star
                      className={`w-5 h-5 ${
                        bookmarkedProjects.includes(project.id)
                          ? 'text-yellow-400 fill-current'
                          : 'text-white'
                      }`}
                    />
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="space-x-4">
                    <ProjectButton
                      variant="primary"
                      size="small"
                      href={project.link}
                      target="_blank"
                      icon={ExternalLinkIcon}
                    >
                      Demo
                    </ProjectButton>
                    <ProjectButton
                      variant="secondary"
                      size="small"
                      href={project.github}
                      target="_blank"
                      icon={GithubIcon}
                    >
                      Código
                    </ProjectButton>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full text-xs">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-white/70 mb-4">
                  {expandedProjects.includes(project.id)
                    ? project.description
                    : `${project.description.slice(0, 100)}...`}
                  <button
                    onClick={() => toggleProjectExpansion(project.id)}
                    className="text-pink-400 hover:text-pink-300 ml-2"
                  >
                    {expandedProjects.includes(project.id) ? 'Ver menos' : 'Ver mais'}
                  </button>
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center text-white/70">
                      <Star className="w-4 h-4 mr-2 text-pink-400" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {project.collaborators && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <h4 className="text-white font-medium mb-2">Colaboradores</h4>
                    <div className="flex -space-x-2">
                      {project.collaborators.map((collaborator, i) => (
                        <img
                          key={i}
                          src={collaborator.avatar}
                          alt={collaborator.name}
                          className="w-8 h-8 rounded-full border-2 border-purple-500"
                          title={collaborator.name}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Metrics */}
                <div className="mt-4 flex gap-4 text-white/60 text-sm">
                  <span>{project.metrics.views} visualizações</span>
                  <span>{project.metrics.likes} likes</span>
                  <span>{project.metrics.commits} commits</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/70 text-lg">
              Nenhum projeto encontrado com os filtros atuais.
            </p>
            <ProjectButton
              variant="secondary"
              className="mt-4"
              onClick={() => {
                setSearchTerm('');
                setSelectedTags([]);
              }}
            >
              Limpar Filtros
            </ProjectButton>
          </div>
        )}
      </div>
    </section>
    
    </>
  );
};
