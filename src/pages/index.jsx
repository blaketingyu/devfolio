import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SectionAwards from '../components/section-award';
import SectionCerts from '../components/section-certifications';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const awards = get(data, 'site.siteMetadata.awards', false );
  const certs = get(data, 'site.siteMetadata.certs', false );
  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} />
      {about && <SectionAbout about={about} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {awards && awards.length && <SectionAwards awards={awards} />}
      {certs && certs.length && <SectionCerts certs={certs} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        projects {
          name
          description
          link
        }
        experience {
          name
          title
          description
          technologies
        }
        skills {
          name
          description
        }
        awards {
          name
          title
          description
          link
        }
        certs {
          name
          title
          description
          link
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
