'use strict';
module.exports = (sequelize, DataTypes) => {
  const offence = sequelize.define('offence', {
    area: DataTypes.STRING,
    age: DataTypes.STRING,
    gender: DataTypes.STRING,
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    homicidemurder: DataTypes.INTEGER,
    otherhomicide: DataTypes.INTEGER,
    attemptedmurder: DataTypes.INTEGER,
    conspiracytomurder: DataTypes.INTEGER,
    manslaughterexclbydriving: DataTypes.INTEGER,
    manslaughterunlawfulstrikingcausingdeath: DataTypes.INTEGER,
    drivingcausingdeath: DataTypes.INTEGER,
    assault: DataTypes.INTEGER,
    grievousassault: DataTypes.INTEGER,
    seriousassault: DataTypes.INTEGER,
    seriousassaultother: DataTypes.INTEGER,
    commonassault: DataTypes.INTEGER,
    sexualoffences: DataTypes.INTEGER,
    rapeandattemptedrape: DataTypes.INTEGER,
    othersexualoffences: DataTypes.INTEGER,
    robbery: DataTypes.INTEGER,
    armedrobbery: DataTypes.INTEGER,
    unarmedrobbery: DataTypes.INTEGER,
    otheroffencesagainsttheperson: DataTypes.INTEGER,
    kidnappingabductionetc: DataTypes.INTEGER,
    extortion: DataTypes.INTEGER,
    stalking: DataTypes.INTEGER,
    lifeendangeringacts: DataTypes.INTEGER,
    offencesagainsttheperson: DataTypes.INTEGER,
    unlawfulentry: DataTypes.INTEGER,
    unlawfulentrywithintentdwelling: DataTypes.INTEGER,
    unlawfulentrywithoutviolencedwelling: DataTypes.INTEGER,
    unlawfulentrywithviolencedwelling: DataTypes.INTEGER,
    unlawfulentrywithintentshop: DataTypes.INTEGER,
    unlawfulentrywithintentother: DataTypes.INTEGER,
    arson: DataTypes.INTEGER,
    otherpropertydamage: DataTypes.INTEGER,
    unlawfuluseofmotorvehicle: DataTypes.INTEGER,
    othertheftexclunlawfulentry: DataTypes.INTEGER,
    stealingfromdwellings: DataTypes.INTEGER,
    shopstealing: DataTypes.INTEGER,
    vehiclesstealfromenterwithintent: DataTypes.INTEGER,
    otherstealing: DataTypes.INTEGER,
    fraud: DataTypes.INTEGER,
    fraudbycomputer: DataTypes.INTEGER,
    fraudbycheque: DataTypes.INTEGER,
    fraudbycreditcard: DataTypes.INTEGER,
    identityfraud: DataTypes.INTEGER,
    otherfraud: DataTypes.INTEGER,
    handlingstolengoods: DataTypes.INTEGER,
    possesspropertysuspectedstolen: DataTypes.INTEGER,
    receivingstolenproperty: DataTypes.INTEGER,
    possessetctaintedproperty: DataTypes.INTEGER,
    otherhandlingstolengoods: DataTypes.INTEGER,
    offencesagainstproperty: DataTypes.INTEGER,
    drugoffences: DataTypes.INTEGER,
    traffickingdrugs: DataTypes.INTEGER,
    possessdrugs: DataTypes.INTEGER,
    producedrugs: DataTypes.INTEGER,
    sellsupplydrugs: DataTypes.INTEGER,
    otherdrugoffences: DataTypes.INTEGER,
    prostitutionoffences: DataTypes.INTEGER,
    foundinplacesusedforpurposeofprostitutionoffences: DataTypes.INTEGER,
    haveinterestinpremisesusedforprostitutionoffences: DataTypes.INTEGER,
    knowinglyparticipateinprovisionprostitutionoffences: DataTypes.INTEGER,
    publicsoliciting: DataTypes.INTEGER,
    procuringprostitution: DataTypes.INTEGER,
    permitminortobeataplaceusedforprostitutionoffences: DataTypes.INTEGER,
    advertisingprostitution: DataTypes.INTEGER,
    otherprostitutionoffences: DataTypes.INTEGER,
    liquorexcldrunkenness: DataTypes.INTEGER,
    gamingracingbettingoffences: DataTypes.INTEGER,
    breachdomesticviolenceprotectionorder: DataTypes.INTEGER,
    trespassingandvagrancy: DataTypes.INTEGER,
    weaponsactoffences: DataTypes.INTEGER,
    unlawfulpossessconcealablefirearm: DataTypes.INTEGER,
    unlawfulpossessfirearmother: DataTypes.INTEGER,
    bombpossessandoruseof: DataTypes.INTEGER,
    possessandoruseotherweaponsrestricteditems: DataTypes.INTEGER,
    weaponsactoffencesother: DataTypes.INTEGER,
    goodorderoffences: DataTypes.INTEGER,
    disobeymoveondirection: DataTypes.INTEGER,
    resistincitehinderobstructpolice: DataTypes.INTEGER,
    fareevasion: DataTypes.INTEGER,
    publicnuisance: DataTypes.INTEGER,
    stockrelatedoffences: DataTypes.INTEGER,
    trafficandrelatedoffences: DataTypes.INTEGER,
    dangerousoperationofavehicle: DataTypes.INTEGER,
    drinkdriving: DataTypes.INTEGER,
    disqualifieddriving: DataTypes.INTEGER,
    interferewithmechanismofmotorvehicle: DataTypes.INTEGER,
    miscellaneousoffences: DataTypes.INTEGER,
    otheroffences: DataTypes.INTEGER
  }, {
      underscored: true,
      timestamps: false,
    });
  offence.associate = function (models) {
    // associations can be defined here
  };
  return offence;
};