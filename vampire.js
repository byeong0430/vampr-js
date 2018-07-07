class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    vampire.creator = this;
    this.offspring.push(vampire);
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let count = 0;
    if (this.creator !== null) {
      // recursive case: creator !== null
      // for each ancestor, add 1 to count
      count++;
      count += this.creator.numberOfVampiresFromOriginal;
    }
    return count;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    }
    return false;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.

  closestCommonAncestor(vampire) {
    console.log('this', this);
    console.log('vampire', vampire);
  }
}

rootVampire = new Vampire("root");
offspring1 = new Vampire("o1");
offspring2 = new Vampire("o2");
offspring3 = new Vampire("o3");
offspring4 = new Vampire("o4");
offspring5 = new Vampire("o5");
offspring6 = new Vampire("o6");
offspring7 = new Vampire("o7");
offspring8 = new Vampire("o8");

rootVampire.addOffspring(offspring1);
rootVampire.addOffspring(offspring2);
rootVampire.addOffspring(offspring3);
offspring3.addOffspring(offspring4);
offspring3.addOffspring(offspring5);
offspring5.addOffspring(offspring6);
offspring6.addOffspring(offspring7);
offspring2.addOffspring(offspring8);
offspring4.getAllAncestors;
// should be offspring 3
// offspring4.closestCommonAncestor(offspring7);

//          ROOT
//    o1     o2       o3
//           o8    o4    o5
//                       o6
//                       o7
module.exports = Vampire;

