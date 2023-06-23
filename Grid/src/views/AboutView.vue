<template>
  <div class="about">
    <div class="parent">
      <div>
        <img src="http://placehold.it/150x150" />
      </div>
      <div class="child1">
        <h3>heading title</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        accusantium eaque dolorum, et dolor perspiciatis.
      </div>
      <div>
        <img src="http://placehold.it/150x150" />
      </div>
      <div class="child2">
        <h3>heading title</h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
        necessitatibus accusamus exercitationem earum voluptatibus quo.
      </div>
      <div>
        <img src="http://placehold.it/150x150" />
      </div>
      <div class="child3">
        <h3>heading title</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ex quia,
        suscipit illum dolorem quaerat.
      </div>
      <div>
        <img src="http://placehold.it/150x150" />
      </div>
      <div class="child4">
        <h3>heading title</h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
        repellat voluptatum? Praesentium alias possimus dolores!
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.parent {
  border: 5px solid #333;
  margin: auto;
  width: 700px;
  padding: 10px;
  background-color: khaki;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: min-content 1fr min-content 1fr;
  justify-content: center;
  div {
    border-radius: 5px;
    padding: 10px;
    background-color: #fff;
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .parent {
    grid-template-columns: min-content 1fr;
    width: auto;
  }
}
</style>
