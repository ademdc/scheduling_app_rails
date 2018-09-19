require "application_system_test_case"

class WorkingDaysTest < ApplicationSystemTestCase
  setup do
    @working_day = working_days(:one)
  end

  test "visiting the index" do
    visit working_days_url
    assert_selector "h1", text: "Working Days"
  end

  test "creating a Working day" do
    visit working_days_url
    click_on "New Working Day"

    fill_in "Arrival", with: @working_day.arrival
    fill_in "Break End", with: @working_day.break_end
    fill_in "Break Start", with: @working_day.break_start
    fill_in "Departure", with: @working_day.departure
    fill_in "User", with: @working_day.user_id
    click_on "Create Working day"

    assert_text "Working day was successfully created"
    click_on "Back"
  end

  test "updating a Working day" do
    visit working_days_url
    click_on "Edit", match: :first

    fill_in "Arrival", with: @working_day.arrival
    fill_in "Break End", with: @working_day.break_end
    fill_in "Break Start", with: @working_day.break_start
    fill_in "Departure", with: @working_day.departure
    fill_in "User", with: @working_day.user_id
    click_on "Update Working day"

    assert_text "Working day was successfully updated"
    click_on "Back"
  end

  test "destroying a Working day" do
    visit working_days_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Working day was successfully destroyed"
  end
end
