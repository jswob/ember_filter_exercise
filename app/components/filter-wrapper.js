import Component from "@glimmer/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class FilterWrapperComponent extends Component {
  // Inject people service whiche has all people data
  @service people;

  // Track filterQuery property to dynamically update it on change
  @tracked
  filterQuery = "";

  @computed("people.list.[]", "filterQuery")
  get filteredPeople() {
    const { people, filterQuery } = this;

    // If filterQuery is empty return all records
    if (!filterQuery.length) return people.list;

    // Filters list of people by given query
    return people.list.filter(({ name }) => {
      // On the begining lowercase name and filterQuery
      const lowerCaseName = name.toLowerCase();
      const lowerCaseFilterQuery = filterQuery.toLowerCase();

      // Check if name containes filterQuery
      return lowerCaseName.includes(lowerCaseFilterQuery);
    });
  }
}
