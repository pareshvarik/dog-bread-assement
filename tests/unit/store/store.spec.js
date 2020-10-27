import store from "@/store/index";
it("assigning dogsList", () => {
  const state = {
    dogBreedList: [],
  };
  const animal = { animal: [{ animal: 1 }, { animal: 2 }, { animal: 3 }] };
  store.mutations.setBreedList(state, animal.animal);
  expect(state.dogBreedList).toBe(animal.animal);
});
it('assigning dogobject', () => {
    const state = {
        dogBreedObject: {}
    }
    const animalobject = { animal: [{ animal: 1 }, { animal: 2 }, { animal: 3 }] };
    store.mutations.setBreedObject(state, animalobject)
    expect(state.dogBreedObject).toBe(animalobject)
  })