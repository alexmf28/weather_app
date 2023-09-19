//obtener el texto de los dias posteriores
export const forecastTextDays = (days) => {
  const daysWithText = days?.map((dayObj) => {
    const dateParts = dayObj.date.split("-");
    const id = dayObj.date_epoch;
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Los meses en JavaScript se cuentan desde 0 (enero) hasta 11 (diciembre)
    const day = parseInt(dateParts[2], 10);

    const date = new Date(year, month, day);
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });

    return {
      id: id,
      date: dayObj.date,
      dayOfWeek: dayOfWeek,
    };
  });
  return daysWithText;
};

//obtener el texto del dia actual
export const currentTextDay = (weather) => {
  const currentDate = weather?.current.last_updated.split(" ");
  if (currentDate === undefined) return;
  const currentDateText = currentDate[0].split("-");
  const currentDateHour = currentDate[1];

  const year = parseInt(currentDateText[0], 10);
  const month = parseInt(currentDateText[1], 10) - 1; // Los meses en JavaScript se cuentan desde 0 (enero) hasta 11 (diciembre)
  const day = parseInt(currentDateText[2], 10);

  const date = new Date(year, month, day);
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });

  const monthOfYear = date.toLocaleDateString("en-US", { month: "long" });

  return {
    dayOfWeek: dayOfWeek,
    numberDay: day,
    monthOfYear: monthOfYear,
    currentDateHour: currentDateHour,
  };
};
