// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.htm", "Ari Software Project", "New! uDiscMounter 25.0    Free Trial    Buy Now  New! ShowPublic IP 13.0    Download    New! OneClick Cleaner 1.0  New! SoundTag 1.0    Download      Download    © 2015 - 2025 Ari Software Project All rights reserved  Our Clients   Global Partner   Algeria  IMKAN SPACE  https //imkan.tech/  noureddine@imkan.space  info@lkey.info  https //lkey.info/  Bluedot Technology Ltd  BTL   Bangladesh  Cambodia  Biplan Global  http //biplanglobal.com  info@biplanglobal.com  Chile  CIRIS LTDA  https //www.ciris.cl/  ventas@ciris.cl  Kenya  PROTECH LTD  http //www.protec.co.ke  sales@protec.co.ke   ", "");
   this[database_length++] = new SearchPage("services.htm", "Services - Ari Software Project", "© 2015 - 2025 Ari Software Project All rights reserved  Our Roadmap  Start/ Cosultation  Discovery  Requirements  Design  Development  Testing  Deployment  Our Clients   Global Partner   Algeria  IMKAN SPACE  https //imkan.tech/  noureddine@imkan.space  Bangladesh  https //lkey.info/  Bluedot Technology Ltd  BTL   info@lkey.info  Cambodia  Biplan Global  http //biplanglobal.com  info@biplanglobal.com  Chile  CIRIS LTDA  https //www.ciris.cl/  ventas@ciris.cl  Kenya  PROTECH LTD  http //www.protec.co.ke  sales@protec.co.ke   ", "");
   this[database_length++] = new SearchPage("contact.htm", "Contact - Ari Software Project", "© 2015 - 2025 Ari Software Project All rights reserved  Our Clients   Global Partner   Algeria  IMKAN SPACE  https //imkan.tech/  noureddine@imkan.space  Bangladesh  https //lkey.info/  Bluedot Technology Ltd  BTL   info@lkey.info  Cambodia  Biplan Global  http //biplanglobal.com  info@biplanglobal.com  Chile  CIRIS LTDA  https //www.ciris.cl/  ventas@ciris.cl  Kenya  PROTECH LTD  http //www.protec.co.ke  sales@protec.co.ke   ", "");
   this[database_length++] = new SearchPage("buynow.htm", "Buy Now - Ari Software Project", "© 2015 - 2025 Ari Software Project All rights reserved  Our Clients   Global Partner   Algeria  IMKAN SPACE  https //imkan.tech/  noureddine@imkan.space  Bangladesh  https //lkey.info/  Bluedot Technology Ltd  BTL   info@lkey.info  Cambodia  Biplan Global  http //biplanglobal.com  info@biplanglobal.com  Chile  CIRIS LTDA  https //www.ciris.cl/  ventas@ciris.cl  Kenya  PROTECH LTD  http //www.protec.co.ke  sales@protec.co.ke   ", "");
   return this;
}
