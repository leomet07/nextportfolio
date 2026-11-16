<!--
Projects for /projects, shown in the order they appear in this file.

Each project is a "## Name" heading, then its fields as "- key: value" lines, then a
one-paragraph description in inline markdown (HTML works too, e.g. for target="_blank").

  images   required, comma-separated, paths in public/; only the first one is shown.
           Stills are resized and served as WebP automatically. For an animation, use
           an animated .webp about 800px wide: Next can't resize those, so it's sent as-is.
  web_url  optional; the card links here, else to gh_url
  gh_url   optional
  hidden   optional; "true" keeps the project off the site (and skips the checks
           above, so unfinished drafts can live here)
-->

## Cool Corridor Routing (CoCo)

- web_url: https://coolcorridors.com
- images: /img/coolcorridor/1.webp

CoCo uses downscaled NASA satellite imagery to minimize heat exposure for pedestrians. I expanded it to seven cities, from New York to Dubai, with daily heat maps from our downscaling model, and we submitted it to <a href="https://prototypesforhumanity.com" target="_blank">Prototypes for Humanity</a>. As a finalist of the PFH program, I presented CoCo at their Dubai summit.

## MODIS LST Downscaling

- images: /img/modis/1.jpg

I developed a model that combines two satellite products to downscale spatial satellite imagery from a 1km to a 30m resolution up to 96x per day. My first case study was over Kuwait (Paper in progress), and our model has since been scaled to be available globally through a collaboration with Amazon AWS.

## The Hive

- web_url: https://thehive.boston
- images: /img/thehive/1.png, /img/thehive/2.png, /img/thehive/3.png

The Hive won Best Pitch Overall and 2nd place in the Exowatt track at the MIT Energy &amp; Climate Hack 2026. Inspired by bees, we designed a mesh architecture that can keep construction robots on remote solar sites coordinated when Wi-Fi drops, improving site productivity and green-energy production reliability.

## Mercury bioavailability in ponds

- web_url: https://gersonlab.weebly.com/
- images: /img/mercury_bioavailability/1.webp

At Dr. Gerson's laboratory, I learned standard environmental, as well as biogeochemistry-specific, wet laboratory techniques to assess how mercury becomes bioavailable from pond sediment. Through a series of sequential selective extractions, we analyzed for Total Hg on the Tekran 2600, which allowed me to assess variation between sample locations and sampling times.

## De novo, not Novel

- web_url: https://gersonlab.weebly.com/
- images: /img/denovo/1.png

In my first semester doing research at Dr. Gerson's Watershed Biogeochemistry in the Anthropocene lab at Cornell, I analyzed de novo waterbodies such as mining ponds, agricultural ponds, and stormwater ponds using GIS and other geospatial programs. Furthermore, I conducted a literature review, both manually and through the help of a custom-made literature review script, to provide evidence for a new paper on why <i>de novo</i> is a more accurate description than <i>novel</i> for these waterbodies.

## Lake-Effect Snow Model

- gh_url: https://github.com/leomet07/cu_geodata_lake_effect_snow_model
- images: /img/lakeeffectsnow/1.png, /img/lakeeffectsnow/2.png

With Cornell GeoData, we built a model that flags lake-effect snow over Cayuga Lake from HRRR forecast data and Ithaca airport observations. Our best classifier reached a 0.98 ROC AUC, a first step toward fixing local forecasts. We're looking to improve it with a new sensor mesh we are deploying around Tompkins county.

## Cayuga Lake Buoy

- web_url: https://cornellgeodata.com
- gh_url: https://github.com/leomet07/cu_geodata_buoy_logger
- images: /img/cubuoy/1.png, /img/cubuoy/2.png

As co-lead of <a href="https://cornellgeodata.com" target="_blank">Cornell GeoData</a>, I'm helping refit a retired research buoy into a weather and water-quality station for Cayuga Lake. I made a custom central controller, which manages the battery and solar unit charge, coordinates data from five different sensors, and sends readings over cellular to our custom-made dashboard.

## Subway Heat Map

- web_url: https://subwayheat.org
- images: /img/subwayheat/1.png, /img/subwayheat/2.png

To share our subway heat study, I built an interactive map of platform and street-level temperature, humidity, and heat index at NYC subway stations, with a timeline of every measurement day. Made with SvelteKit and Leaflet.

## Subway Heat Model

- web_url: https://doi.org/10.1016/j.buildenv.2026.115327
- images: /img/subwaymodel/1.png, /img/subwaymodel/2.png

Through a partnership with CityTech and NASA, we measured heat at 112 NYC subway stations: 70% of platforms had a higher summer heat index than the street above. I helped build a machine learning model that forecasts platform temperatures (R² = 0.85), <a href="https://doi.org/10.1016/j.buildenv.2026.115327" target="_blank">published</a> in <i>Building and Environment</i>.

## Hyperspectral Drone Imaging

- gh_url: https://github.com/leomet07/dr_azar_hyperspectral_analysis
- images: /img/drone/1.png, /img/drone/2.png, /img/drone/3.png

To spot algal blooms at a finer scale than satellites allow, I built a pipeline that turns raw hyperspectral drone imagery into georeferenced chlorophyll index maps of lakes, and compared drone spectra and model predictions with Sentinel-2.

## Adirondack DOC Analysis

- gh_url: https://github.com/leomet07/analyzing-doc-variation
- hidden: true

I used decades of Landsat imagery to study how dissolved organic carbon (DOC) has changed in Adirondack lakes, and compared how different atmospheric corrections affect DOC predictions from band-ratio equations and machine learning models.

## HAB Oracle Website

- web_url: https://nyhabs.org
- gh_url: https://github.com/leomet07/HarmfulAlgalBloomOracle
- images: /img/haboracle/1.png, /img/haboracle/2.png

To share the results of the algal bloom model with constituents and other scientists, I developed a website which displayed the chlorophyll-a concentration predictions of 4,000 lakes over more than a decade. The website was my first introduction to geospatial web development at such a large scale, and I developed a new solution for our big data pipeline, using a MongoDB database with geographic information referenced within.

## Algal Bloom Model

- web_url: https://www.sciencedirect.com/science/article/pii/S1470160X25012488
- gh_url: https://github.com/leomet07/ny-satellite-chla-model
- images: /img/algalbloom/1.png, /img/algalbloom/2.png

As an intern with the NASA Climate Change Research Initiative at the Goddard Institute for Space Studies, I helped my team to develop a model that combined remote sensing data with local land use data to predict harmful algal blooms across over 4,000 lakes in New York State. Furthermore, we detailed the model in a <a href="https://www.sciencedirect.com/science/article/pii/S1470160X25012488" target="_blank">published research paper</a> (<a href="https://www.giss.nasa.gov/pubs/abs/gr05210v.html" target="_blank">NASA GISS</a>).

## ARISTA Rewrite

- web_url: https://stuyarista.org
- gh_url: https://github.com/stuy-arista/arista-web
- images: /img/arista/1.png, /img/arista/2.png

I created this website to manage the duties for hundreds of members within Stuyvesant’s ARISTA Honor Society. Made with SvelteKit and PocketBase, it provided the scalable backend needed to host everything from peer-to-peer tutoring to event management.

## Spectator Demographics Survey

- web_url: https://survey.stuyspec.com
- gh_url: https://github.com/leomet07/spec-survey
- images: /img/specsurvey/2.png, /img/specsurvey/1.png, /img/specsurvey/3.png

I created this website for <i>The Spectator</i> to facilitate the collection of detailed ancestral and heritage information for the Stuyvesant student body. Results are visible in an interactive dashboard.

## Spectator Rewrite

- web_url: https://stuyspec.com/
- gh_url: https://github.com/stuyspec/stuyspec-rewrite
- images: /img/stuyspec/2.png, /img/stuyspec/1.png, /img/stuyspec/3.png, /img/stuyspec/4.png

This was the new rewritten website for [The Stuyvesant Spectator](<https://en.wikipedia.org/wiki/The_Spectator_(Stuyvesant_High_School)>). As a Spec Web developer, I was in charge of the development and migration of this site.

## Sophomore Caucus Site

- web_url: https://sophomore.stuysu.org
- gh_url: https://github.com/leomet07/sophomore.stuysu.org
- images: /img/sophomorecaucus/1.png, /img/sophomorecaucus/2.png, /img/sophomorecaucus/3.png, /img/sophomorecaucus/4.png, /img/sophomorecaucus/5.png
- hidden: true

This was the website and homepage for the [Stuyvesant Sophomore Caucus](sophomore.stuysu.org) (same caucus as the one in freshman year). As their IT director, I lead development and maintained this site, as well as handling other IT department tasks.

## Stuy Linux

- web_url: https://stuylinux.org
- gh_url: https://github.com/stuylinux/stuylinux.org
- images: /img/stuylinux/1.png, /img/stuylinux/2.png
- hidden: true

This was the website for the club I founded, [Stuy Linux](https://stuylinux.org). I am the co-president of Stuy Linux, so I started development of this site and open-source project.

## Genfolio

- web_url: https://genfolio.xyz/
- gh_url: https://github.com/leomet07/genfolio
- images: /img/genfolio/homepage.png, /img/genfolio/template.png, /img/genfolio/leomet07.png
- hidden: true

[Genfolio](https://devpost.com/software/genfolio) was the first place winning project <a href="https://techoptimum.devpost.com/" target="_blank">Tech Optimum 2022</a>. Genfolio is the no-code platform for generating developer resume pages.

## Freshman Caucus Site

- web_url: https://freshmancaucus.herokuapp.com/
- gh_url: https://github.com/leomet07/freshamn.stuysu.org
- images: /img/freshmancaucus/main.png, /img/freshmancaucus/about.png, /img/freshmancaucus/policies.png
- hidden: true

This was the website and homepage for the <a href="https://freshman.stuysu.org" target="_blank">Stuyvesant Freshman Caucus</a>. As their IT director, I managed and developed this site, as well as lead their IT department.

## Kinesis

- web_url: https://kinesisfrontend.vercel.app
- gh_url: https://github.com/leomet07/kinesis
- images: /img/kinesis/main.jpg, /img/kinesis/covid.jpg, /img/kinesis/email.jpg
- hidden: true

Kinesis is the winning project for <a href="https://stuyhacks-xi.devpost.com/" target="_blank">StuyHacks XI</a>. It's a faster and more transparent way to contact trace for cafeterias and more.

## BikePark

- web_url: https://bikepark.vercel.app
- gh_url: https://github.com/leomet07/bikepark
- images: /img/bikepark/home.png, /img/bikepark/preview.png
- hidden: true

A webapp designed to encourage biking and carbon-free sustainable travel by providing all available bike parking locations.

## Water Leak Detector

- gh_url: https://github.com/leomet07/water_leak_detector
- images: /img/water_leak_detector/playstore.png
- hidden: true

My self-developed (side project), free and open source, and full ecosystem for water leak detectors.

## Salvare

- web_url: https://salvare-fullstack.web.app/
- gh_url: https://github.com/leomet07/salvare
- images: /img/salvare/home.png, /img/salvare/large.png, /img/salvare/zoomed.png
- hidden: true

Salvare is a winning project built for the 2021 February MLH hackathon "Hackers of the Galaxy". A dangerous asteroid displayer built off the NASA NeoW api and the Small Body Database browser.

## Tunesly

- web_url: https://tuneslysite.web.app
- gh_url: https://github.com/leomet07/web-music-maker
- images: /img/tunesly/screenshot.png
- hidden: true

Tunesly was built for Tech With Tim's august code jam. This is a spotify playlist/song generator, built on top of their extensive databases through their api. For more info visit <a href='https://tunesly.net/about' target = '_blank'> its about page </a>

## Momenta

- web_url: https://mobile-momenta.web.app
- images: /img/momenta/homepage.png, /img/momenta/contact.png, /img/momenta/mobilenew.png, /img/momenta/mobileold.png
- hidden: true

Momenta was born from my winning project at STUYhacks 2020 (Stuyvesant hackathon). Momenta then evolved to be a full fledged social media system, with friending, multiple pages, and a premium feature set.

## Playlist Software

- gh_url: https://github.com/leomet07/playlistsoftware
- images: /img/playlistsoftware/1.png
- hidden: true

This is a local tool for working with various types of playlists. It can convert the largest of youtube music playlists to spotify while checking for song compatibility and availability.

## Pedestrian Counter

- gh_url: https://github.com/leomet07/Pedestrian-Counting-Python
- images: /img/pedestrain_counter/screenshot.png
- hidden: true

This is a simple 'app'/model that can detect pedestrians as they walk past a camera. This is/was deployed in a cafe doorframe recording pedestrians as they walk by. The counted data can be used for marketing/ other business analytics.

## Mario with Pygame

- gh_url: https://github.com/leomet07/mario-python
- images: /img/mario/screenshot.png
- hidden: true

A basic Mario implementation/game system and engine in pygame. It has basic physics, sprite generation, and movement.
