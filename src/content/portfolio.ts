// src/content/portfolio.ts

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  year: number;
  category: string;
  role: string;
  description: string;
  coverImage: ProjectImage;
  galleryImages: ProjectImage[];
  credits: string[];
  tags: string[];
  location?: string;
};

export const photographyProjects: Project[] = [
  {
    id: 'photo-01',
    slug: 'IAMDDB',
    title: 'IAMDDB - Manchester.',
    year: 2019,
    category: 'Photography',
    role: 'Concert Photographer',
    description:
      'Live festival/concert coverage in Manchester — stage energy, crowd atmosphere, and editorial moments from the IAMDDB performance.',
    coverImage: {
      src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855909/NVZ03412-2_ij8h5a.jpg',
      alt: 'IAMDDB performing live in Manchester — concert photography'
    },
    galleryImages: [
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855997/NVZ02861_zkhurp.jpg', alt: 'IAMDDB live in Manchester — gallery image 01' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855872/NVZ03608_mzwrvi.jpg', alt: 'IAMDDB live in Manchester — gallery image 02' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855960/NVZ02784_jvixdg.jpg', alt: 'IAMDDB live in Manchester — gallery image 03' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855920/NVZ03823_zdgxg7.jpg', alt: 'IAMDDB live in Manchester — gallery image 04' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855983/NVZ02889_f78opw.jpg', alt: 'IAMDDB live in Manchester — gallery image 05' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855891/NVZ02711_anahsc.jpg', alt: 'IAMDDB live in Manchester — gallery image 06' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855892/NVZ03748_vdz5cw.jpg', alt: 'IAMDDB live in Manchester — gallery image 07' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855875/NVZ03131_hbgf5z.jpg', alt: 'IAMDDB live in Manchester — gallery image 08' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855939/NVZ03844_ajssci.jpg', alt: 'IAMDDB live in Manchester — gallery image 09' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855965/NVZ03904_x1scfo.jpg', alt: 'IAMDDB live in Manchester — gallery image 10' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855977/NVZ02864_llzyag.jpg', alt: 'IAMDDB live in Manchester — gallery image 11' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855864/NVZ02978_ahsszl.jpg', alt: 'IAMDDB live in Manchester — gallery image 12' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855918/NVZ02533_dvjrqn.jpg', alt: 'IAMDDB live in Manchester — gallery image 13' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855992/NVZ02727_c9lcfn.jpg', alt: 'IAMDDB live in Manchester — gallery image 14' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855973/NVZ03877_cvsexv.jpg', alt: 'IAMDDB live in Manchester — gallery image 15' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855895/NVZ02566_yzdfyb.jpg', alt: 'IAMDDB live in Manchester — gallery image 16' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855952/NVZ03822_l5epyc.jpg', alt: 'IAMDDB live in Manchester — gallery image 17' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855887/NVZ03314_qcdi04.jpg', alt: 'IAMDDB live in Manchester — gallery image 18' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855958/NVZ03341_ldlphi.jpg', alt: 'IAMDDB live in Manchester — gallery image 19' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855974/NVZ03949_xvkx1v.jpg', alt: 'IAMDDB live in Manchester — gallery image 20' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855969/NVZ03924_vyzpqa.jpg', alt: 'IAMDDB live in Manchester — gallery image 21' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855901/NVZ03305_we7jyp.jpg', alt: 'IAMDDB live in Manchester — gallery image 22' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855963/NVZ03865_buazt9.jpg', alt: 'IAMDDB live in Manchester — gallery image 23' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855921/NVZ02740_wqz6uu.jpg', alt: 'IAMDDB live in Manchester — gallery image 24' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855908/NVZ03267_mwf3ss.jpg', alt: 'IAMDDB live in Manchester — gallery image 25' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855976/NVZ03901_a8iebk.jpg', alt: 'IAMDDB live in Manchester — gallery image 26' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855878/NVZ03738_csf86o.jpg', alt: 'IAMDDB live in Manchester — gallery image 27' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855955/NVZ02746_f8mmgt.jpg', alt: 'IAMDDB live in Manchester — gallery image 28' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766856003/NVZ02881_ibmcs1.jpg', alt: 'IAMDDB live in Manchester — gallery image 29' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855958/NVZ03485-2_ffpkq6.jpg', alt: 'IAMDDB live in Manchester — gallery image 30' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855987/NVZ02647_jkb0cr.jpg', alt: 'IAMDDB live in Manchester — gallery image 31' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855935/NVZ03535_esovkv.jpg', alt: 'IAMDDB live in Manchester — gallery image 32' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855879/NVZ03751_ek6nen.jpg', alt: 'IAMDDB live in Manchester — gallery image 33' }
    ],
    credits: ['Photography: nuViz', 'Edit/Grade: nuViz Studio'],
    tags: ['Concert', 'Festival', 'Live Music', 'Manchester'],
    location: 'Manchester, UK'
  },

  {
    id: 'photo-02',
    slug: 'CASISDEAD',
    title: 'CASISDEAD - House Of Vans.',
    year: 2018,
    category: 'Photography',
    role: 'Lead Photographer',
    description:
      'Event coverage at House of Vans for CASISDEAD — raw crowd energy, tight stage moments, and atmospheric details in low light.',
    coverImage: {
      src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855718/DSC09827_fhzbhx.jpg',
      alt: 'CASISDEAD performing at House of Vans — event photography'
    },
    galleryImages: [
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855696/DSC05221_blfhrf.jpg', alt: 'CASISDEAD - House of Vans — gallery image 01' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855709/DSC09562_g3id0y.jpg', alt: 'CASISDEAD - House of Vans — gallery image 02' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855713/DSC09753_nxhjem.jpg', alt: 'CASISDEAD - House of Vans — gallery image 03' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855677/DSC09508_uakoga.jpg', alt: 'CASISDEAD - House of Vans — gallery image 04' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855690/DSC09844_o8p2ny.jpg', alt: 'CASISDEAD - House of Vans — gallery image 05' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855710/DSC09635_mk1izt.jpg', alt: 'CASISDEAD - House of Vans — gallery image 06' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855698/DSC09558_jhkpu0.jpg', alt: 'CASISDEAD - House of Vans — gallery image 07' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855690/DSC09756_hfdrts.jpg', alt: 'CASISDEAD - House of Vans — gallery image 08' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855674/DSC09766_ndz3x2.jpg', alt: 'CASISDEAD - House of Vans — gallery image 09' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855704/DSC09489_hc2mdw.jpg', alt: 'CASISDEAD - House of Vans — gallery image 10' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855654/DSC09766_uvtfdu.jpg', alt: 'CASISDEAD - House of Vans — gallery image 11' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855697/DSC09555_iwx5it.jpg', alt: 'CASISDEAD - House of Vans — gallery image 12' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855679/DSC09538_sc3vrg.jpg', alt: 'CASISDEAD - House of Vans — gallery image 13' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855717/DSC09797_xz9zyw.jpg', alt: 'CASISDEAD - House of Vans — gallery image 14' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855680/DSC09765_zlamkx.jpg', alt: 'CASISDEAD - House of Vans — gallery image 15' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855701/DSC09524_dbxymu.jpg', alt: 'CASISDEAD - House of Vans — gallery image 16' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855696/DSC05193_pq1yoj.jpg', alt: 'CASISDEAD - House of Vans — gallery image 17' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766855677/DSC09518_vk8kln.jpg', alt: 'CASISDEAD - House of Vans — gallery image 18' }
    ],
    credits: ['Photography: nuViz', 'Edit/Grade: nuViz Studio'],
    tags: ['Event', 'Concert', 'Live Music', 'House of Vans'],
    location: 'London, UK'
  },

  {
    id: 'photo-03',
    slug: 'Kojay-radical',
    title: 'Kojay Radical - Manchester International Festival',
    year: 2017,
    category: 'Photography',
    role: 'Lead Photographer',
    description:
      'Festival coverage for Manchester International Festival (MIF) — documenting Kojay Radical’s set with an editorial focus on atmosphere, crowd connection, and stage presence.',
    coverImage: {
      src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857265/DSC07052_vs8m5g.jpg',
      alt: 'Kojay Radical at Manchester International Festival — event photography'
    },
    galleryImages: [
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857285/DSC07641_mewn9g.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 01' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857281/DSC07454_jblrpm.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 02' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857278/DSC07259_o6oal5.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 03' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857281/DSC07019_thhget.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 04' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857274/DSC07277_wldrr1.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 05' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857281/DSC07495_pbf6iw.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 06' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857274/DSC07184_xx39ny.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 07' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857258/DSC07346_oufdki.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 08' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857260/DSC06811_bndr3d.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 09' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857256/DSC07068_o46gz9.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 10' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857254/DSC06778_cmjrzl.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 11' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857259/DSC06929_prid7u.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 12' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857267/DSC07050_cnrfg9.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 13' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857277/DSC06976_ani1ru.jpg', alt: 'Kojay Radical at MIF Manchester — gallery image 14' }
    ],
    credits: ['Photography: nuViz', 'Edit/Grade: nuViz Studio'],
    tags: ['Event', 'Festival', 'Live Music', 'MIF', 'Manchester'],
    location: 'Manchester, UK'
  },

  {
    id: 'photo-04',
    slug: 'bicep-depot-mayfield',
    title: 'Bicep - Depot Mayfield',
    year: 2021,
    category: 'Photography',
    role: 'Concert Photographer',
    description:
      'Live coverage at Depot Mayfield — Bicep in full motion: strobes, haze, and warehouse-scale energy captured with an editorial eye for light and rhythm.',
    coverImage: {
      src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766935677/NVZ04279_jwuioh.jpg',
      alt: 'Bicep performing live at Depot Mayfield — concert photography'
    },
    galleryImages: [
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766935686/NVZ04559_xegpqu.jpg', alt: 'Bicep at Depot Mayfield — gallery image 01' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766935677/NVZ04585_owh89g.jpg', alt: 'Bicep at Depot Mayfield — gallery image 02' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766935678/NVZ04574_nosknw.jpg', alt: 'Bicep at Depot Mayfield — gallery image 03' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766935677/NVZ04274_ahj6lf.jpg', alt: 'Bicep at Depot Mayfield — gallery image 04' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766935679/NVZ04633_oood8o.jpg', alt: 'Bicep at Depot Mayfield — gallery image 05' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766935680/NVZ04983_vkxsbo.jpg', alt: 'Bicep at Depot Mayfield — gallery image 06' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766935683/NVZ04635_nvhppn.jpg', alt: 'Bicep at Depot Mayfield — gallery image 07' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766935677/NVZ04589_coetnj.jpg', alt: 'Bicep at Depot Mayfield — gallery image 08' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766935677/NVZ04332_fnji8b.jpg', alt: 'Bicep at Depot Mayfield — gallery image 09' }
    ],
    credits: ['Photography: nuViz', 'Edit/Grade: nuViz Studio'],
    tags: ['Concert', 'Live Music', 'Bicep', 'Manchester'],
    location: 'Manchester, UK'
  },

  // ✅ NEW PROJECT: New Order - Manchester (2017)
  {
    id: 'photo-05',
    slug: 'new-order-manchester',
    title: 'New Order - Manchester',
    year: 2017,
    category: 'Photography',
    role: 'Concert Photographer',
    description:
      'Concert coverage in Manchester — New Order captured with an editorial focus on light, atmosphere, and performance energy.',
    coverImage: {
      src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857322/DSC06673_ph6vhi.jpg',
      alt: 'New Order performing live in Manchester — concert photography'
    },
    galleryImages: [
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857323/DSC06654_mnq0bz.jpg', alt: 'New Order live in Manchester — gallery image 01' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857323/DSC06654_mnq0bz.jpg', alt: 'New Order live in Manchester — gallery image 02' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857326/DSC06689_b1anae.jpg', alt: 'New Order live in Manchester — gallery image 03' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857320/DSC06651_bt4tfb.jpg', alt: 'New Order live in Manchester — gallery image 04' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857319/DSC06617_b8rkhx.jpg', alt: 'New Order live in Manchester — gallery image 05' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857314/DSC06559_jm776p.jpg', alt: 'New Order live in Manchester — gallery image 06' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857315/DSC06564_smn5o7.jpg', alt: 'New Order live in Manchester — gallery image 07' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857322/DSC06662_yxkevr.jpg', alt: 'New Order live in Manchester — gallery image 08' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857328/DSC06596_supmnv.jpg', alt: 'New Order live in Manchester — gallery image 09' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857318/DSC06585_rgjaea.jpg', alt: 'New Order live in Manchester — gallery image 10' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857316/DSC06529_y1mvew.jpg', alt: 'New Order live in Manchester — gallery image 11' },
      { src: 'https://res.cloudinary.com/de8d8i155/image/upload/v1766857319/DSC06582_a78huw.jpg', alt: 'New Order live in Manchester — gallery image 12' }
    ],
    credits: ['Photography: nuViz', 'Edit/Grade: nuViz Studio'],
    tags: ['Concert', 'Live Music', 'New Order', 'Manchester'],
    location: 'Manchester, UK'
  }
];

// These exports prevent import errors from other pages
export const videographyProjects: Project[] = [];
export const musicVideoProjects: Project[] = [];
export const designProjects: Project[] = [];

// Aliases (in case your pages use slightly different names)
export const musicVideosProjects = musicVideoProjects;

export const allProjects: Project[] = [
  ...photographyProjects,
  ...videographyProjects,
  ...musicVideoProjects,
  ...designProjects
];

export function getProjectBySlug(slug: string) {
  return allProjects.find((p) => p.slug === slug);
}
