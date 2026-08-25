depguard/
├── bin/
│   └── depguard.js               # Point d'entrée de l'exécutable CLI (#!/usr/bin/env node)
├── src/
│   ├── index.ts                  # Configuration des commandes CLI (Commander / Yargs)
│   ├── config/
│   │   └── constants.ts          # Seuil d'entropie, regex, URL d'API (OSV)
│   ├── core/                     # Logique métier pure (types & interfaces)
│   │   ├── types/
│   │   │   └── report.ts         # Types VulnerabilityReport, Severity, etc.
│   │   └── interfaces/
│   │       ├── IAnalyzer.ts      # Interface pour les modules d'analyse
│   │       └── IParser.ts        # Interface pour les parsers de fichiers
│   ├── parsers/                  # Extraction des données d'entrée
│   │   ├── NpmParser.ts          # Parse package-lock.json / package.json
│   │   └── CodeScanner.ts        # Parcourt l'arborescence et lit les fichiers
│   ├── analyzers/                # Moteurs de détection
│   │   ├── DependencyAnalyzer.ts # Interroge l'API OSV pour les CVEs
│   │   └── SecretAnalyzer.ts     # Calcul d'entropie + Regex
│   ├── reporters/                # Mise en forme des résultats
│   │   ├── ConsoleReporter.ts    # Affichage terminal (couleurs, tableaux)
│   │   └── JsonReporter.ts       # Export fichier JSON
│   └── utils/
│       ├── entropy.ts            # Algorithme d'entropie de Shannon
│       └── semver.ts             # Comparaison de versions
├── tests/                        # Tests unitaires et d'intégration
│   ├── entropy.test.ts
│   └── NpmParser.test.ts
├── package.json
├── tsconfig.json
└── README.md