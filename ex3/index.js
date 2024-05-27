function ziua_saptamanii(numarzi) {
    switch (numarzi) {
      case 1:
        return "Luni";
      case 2:
        return "Marti";
      case 3:
        return "Miercuri";
      case 4:
        return "Joi";
      case 5:
        return "Vineri";
      case 6:
        return "Sambata";
      case 7:
        return "Duminica";
    }
  }
  
  console.log(ziua_saptamanii(2));