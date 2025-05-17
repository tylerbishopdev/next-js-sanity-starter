import React from 'react';
import Image from 'next/image';
import { PAGE_QUERYResult } from '@/sanity.types';
import PortableTextRenderer from '@/components/portable-text-renderer';
import { urlFor } from "@/sanity/lib/image";

type TeamMember = {
  _key: string;
  name: string;
  role: string;
  bio?: string;
  image?: {
    alt?: string;
    asset?: {
      _id: string;
      url: string;
      metadata?: {
        lqip?: string;
        dimensions?: {
          width: number;
          height: number;
        }
      }
    }
  }
};

type TeamSection = {
  title?: string;
  description?: string;
  members?: TeamMember[];
  staffMembers?: TeamMember[];
};

type Location = {
  _key: string;
  name: string;
  address?: string;
};

type CoreValue = {
  _key: string;
  title: string;
  description?: string;
  image?: {
    alt?: string;
    asset?: {
      _id: string;
      url: string;
      metadata?: {
        lqip?: string;
        dimensions?: {
          width: number;
          height: number;
        }
      }
    }
  }
};

type IntroImage = {
  _key: string;
  alt?: string;
  asset?: {
    _id: string;
    url: string;
    metadata?: {
      lqip?: string;
      dimensions?: {
        width: number;
        height: number;
      }
    }
  }
};

interface AboutProps {
  _type: 'about';
  _key: string;
  title?: string;
  introText?: any;
  mission?: any;
  introImages?: IntroImage[];
  coreValues?: CoreValue[];
  teamSection?: TeamSection;
  locations?: Location[];
}

export default function About({
  title,
  introText,
  mission,
  introImages,
  coreValues,
  teamSection,
  locations
}: AboutProps): React.ReactElement {
  // Type guards for arrays and objects to fix TypeScript errors
  const introImagesArray = Array.isArray(introImages) ? introImages : [];
  const coreValuesArray = Array.isArray(coreValues) ? coreValues : [];
  const locationsArray = Array.isArray(locations) ? locations : [];
  const teamSectionObj = teamSection && typeof teamSection === 'object' ? teamSection as TeamSection : { title: '', description: '', members: [], staffMembers: [] };
  const teamMembers = teamSectionObj.members && Array.isArray(teamSectionObj.members) ? teamSectionObj.members : [];
  const staffMembers = teamSectionObj.staffMembers && Array.isArray(teamSectionObj.staffMembers) ? teamSectionObj.staffMembers : [];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-8 py-12 space-y-14">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="py-2">
          {title && (
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              {title}
            </h1>
          )}
          {introText && (
            <div className="text-muted-foreground mb-10 pt-10 text-lg">
              <PortableTextRenderer value={introText} />
            </div>
          )}
          <div className="border border-border rounded-lg p-8 bg-muted/10">
            <span className="text-xl font-bold text-accent">Our Mission</span>
            {mission && (
              <p className=" border-l-3 mt-6 border-primary pl-4 py-2">{typeof mission === 'string' ? mission : <PortableTextRenderer value={mission} />}</p>
            )}
          </div>
        </div>

        {introImagesArray.length > 0 && (
          <div className="grid grid-cols-2 gap-4 relative">
            {introImagesArray.map((img: IntroImage, i: number) => (
              <div key={img._key} className={`relative ${i === 0 ? 'col-span-2' : ''} overflow-hidden rounded-md`}>
                <Image
                  src={img.asset?._id ? urlFor(img).url() : ""}
                  alt={img.alt || "Company image"}
                  width={i === 0 ? 500 : 240}
                  height={i === 0 ? 300 : 240}
                  className="object-cover w-full h-full"
                  placeholder={img.asset?.metadata?.lqip ? "blur" : undefined}
                  blurDataURL={img.asset?.metadata?.lqip || undefined}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Core Values Section */}
      {coreValuesArray.length > 0 && (
        <section className="border border-border rounded-lg p-8 bg-muted/10">
          <h2 className="text-3xl text-accent font-bold mb-2">Ezoic DNA</h2>
          <p className="text-muted-foreground mb-8">Our foundation is built on a DNA that is hard-working, creative, and ethical.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {coreValuesArray.map((value: CoreValue) => (
              <div key={value._key} className="flex flex-col">
                <div className="flex items-center mb-3">
                  {value.image && value.image.asset && (
                    <div className="w-10 h-10 mr-3 flex">
                      <Image
                        src={value.image.asset?._id ? urlFor(value.image).url() : ""}
                        alt={value.image.alt || value.title || "Core value icon"}
                        width={40}
                        height={40}
                        className="object-contain"
                        placeholder={value.image.asset?.metadata?.lqip ? "blur" : undefined}
                        blurDataURL={value.image.asset?.metadata?.lqip || undefined}
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-bold">{value.title}</h3>
                </div>
                {value.description && (
                  <p className="text-muted-foreground text-sm">{typeof value.description === 'string' ? value.description : <PortableTextRenderer value={value.description} />}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Team Section */}
      {teamSectionObj.title && teamMembers.length > 0 && (
        <section className="border border-border rounded-lg p-8 bg-muted/10">
          <span className="text-base text-accent">Executive Team</span>
          <h2 className="text-3xl font-bold mb-8">{teamSectionObj.title}</h2>
          {teamSectionObj.description && (
            <p className="text-muted-foreground mb-6">{teamSectionObj.description}</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {teamMembers.map((member: TeamMember) => (
              <div key={member._key} className="flex flex-col items-center text-center">
                {member.image && (
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                    <Image
                      src={member.image.asset?._id ? urlFor(member.image).url() : ""}
                      alt={member.name || "Team member"}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full grayscale-50"
                      placeholder={member.image.asset?.metadata?.lqip ? "blur" : undefined}
                      blurDataURL={member.image.asset?.metadata?.lqip || undefined}
                    />
                  </div>
                )}
                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                {member.bio && (
                  <p className="text-xs mt-2">{member.bio}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Staff Section */}
      {staffMembers.length > 0 && (
        <section className="border border-border rounded-lg p-8 bg-muted/10">
          <span className="text-base text-accent">Senior Leadership</span>
          <h2 className="text-3xl font-bold mb-8">Team Members</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {staffMembers.map((member: TeamMember, index: number) => (
              <div key={member._key} className="flex flex-col items-center text-center">
                {member.image && (
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                    <Image
                      src={member.image.asset?._id ? urlFor(member.image).url() : ""}
                      alt={member.name || "Staff member"}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full grayscale-50"
                      placeholder={member.image.asset?.metadata?.lqip ? "blur" : undefined}
                      blurDataURL={member.image.asset?.metadata?.lqip || undefined}
                    />
                  </div>
                )}
                <h4 className="font-bold text-sm">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                {member.bio && (
                  <p className="text-xs mt-2">{member.bio}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Locations Section */}
      {locationsArray.length > 0 && (
        <section className="py-10  rounded-lg p-8  text-center mx-auto">
          <h3 className="text-2xl font-bold mb-6">Locations</h3>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 text-center mx-auto">
              {locationsArray.map((location: Location) => (
                <div key={location._key} className="p-6 border-r border-border last:border-r-0">
                  <h4 className="font-bold text-accent text-lg">{location.name}</h4>
                  {location.address && (
                    <p className="text-sm mt-2">{location.address}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
