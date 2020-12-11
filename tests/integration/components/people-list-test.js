import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { A } from "@ember/array";

module("Integration | Component | people-list", function (hooks) {
  setupRenderingTest(hooks);

  test("it shows list of all passed people", async function (assert) {
    const people = A(["John Test", "Vi", "John Silverhand"]);

    this.set("people", people);

    await render(hbs`<PeopleList @people={{this.people}} />`);

    assert.dom("[data-test-list-element]").exists({ count: 3 });

    people.pushObject("Jack Daniels");
    this.set("people", people);

    assert.dom("[data-test-list-element]").exists({ count: 4 });
  });
});
