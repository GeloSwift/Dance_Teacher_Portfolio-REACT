import React from "react";
import { Code } from "lucide-react";
import { User } from "lucide-react";
import { Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          À propos de <span className="text-primary"> moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Professeure de danse passionnée</h3>

            <p className="text-muted-foreground">
              Avec plus de 10 ans d'expérience, j'ai dédié ma vie à l'enseignement de la danse. Mon
              parcours a commencé à un jeune âge, et depuis, j'ai eu la chance de partager ma
              passion avec des élèves de tous âges.
            </p>

            <p className="text-muted-foreground">
              Je crois que la danse est une forme d'expression puissante, et je m'efforce de créer
              un environnement bienveillant et inclusif pour tous mes élèves. Qu'ils soient
              débutants ou danseurs avancés, je m'engage à les aider à atteindre leur plein
              potentiel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Me contacter
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Télécharger CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Développement Web</h4>
                  <p className="text-muted-foreground">
                    Création d'applications web responsives et accessibles avec des frameworks
                    modernes.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Éducation à la danse</h4>
                  <p className="text-muted-foreground">
                    Création de programmes de danse engageants et efficaces pour les élèves de tous
                    niveaux.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Gestion de projets</h4>
                  <p className="text-muted-foreground">
                    Supervision de projets de danse de la conception à l'exécution, en s'assurant
                    qu'ils atteignent les objectifs artistiques et éducatifs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
