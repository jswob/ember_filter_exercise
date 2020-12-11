import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, fillIn } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | filter-wrapper", function (hooks) {
  setupRenderingTest(hooks);

  test("it filters list of poeple by passed query", async function (assert) {
    const peopleList = this.owner.lookup("service:people").list;

    await render(hbs`<FilterWrapper />`);

    assert
      .dom("[data-test-input")
      .exists()
      .hasNoValue("Input starts with no value");

    assert
      .dom("[data-test-list-element]")
      .exists(
        { count: peopleList.length },
        "If input doesn't has value it renders all people"
      );

    const firstManName = peopleList.firstObject.name;

    await fillIn("[data-test-input]", firstManName.toLowerCase());

    assert
      .dom("[data-test-list-element]")
      .exists({ count: 1 })
      .hasText(
        firstManName,
        "It correctly filters people by given query and it is case insensitive"
      );
  });
});
