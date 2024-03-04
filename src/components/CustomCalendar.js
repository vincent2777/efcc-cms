import { Flex, Text } from "@chakra-ui/react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import { isSameDay } from "date-fns";
import { useNavigate } from "react-router-dom";
// import { isBefore, g } from "date-fns"

const CustomCalendar = ({
  setShowCalendar,
  showCloseButton = false,
  customRender = null,
  dayHeight = "auto",
  dayBorder = "none",
  textAlign = "center",
  monthPadding = null,
  fontWeight = "500",
  todayStyles = null,
  monthAndYearWrapperMargin = "1rem 1.5rem",
  handleChange,
  ...props
}) => {
  const navigate = useNavigate();
  return (
    <Flex
      borderRadius={"5px"}
      bg={"white"}
      direction={"column"}
      position={"relative"}
      p={2}
      sx={{
        "&": {
          justifyContent: "center",
          " p": {
            lineHeight: "initial",
          },
          ".rdrWeekDay": {
            textAlign: textAlign,
          },
          ".rdrCalendarWrapper": {
            flexGrow: 1,
            borderRadius: "5px",
          },
          ".rdrMonthAndYearWrapper": {
            // justifyContent: "flex-end",
            padding: "0 1rem",
            margin: monthAndYearWrapperMargin,
          },
          ".rdrMonthAndYearPickers": {
            color: "primary",
            fontSize: "1.5rem",
          },
          ".rdrCalendarWrapper:not(.rdrDateRangeWrapper) .rdrDayHovered .rdrDayNumber:after, .rdrDayStartPreview.rdrDayEndPreview":
            {
              border: "none",
            },
          ".rdrMonth": {
            width: "100%",
            padding: monthPadding,
          },
          "button.rdrDay": {
            height: dayHeight,
            border: dayBorder,
            position: "relative",
          },
          ".rdrNextPrevButton": {
            margin: "0 0.2rem",
            borderRadius: "1000px",
            color: "Dark Gray",
            background: "#FEEBDC",
          },
          ".rdrDayNumber": {
            alignItems: "flex-start",
            justifyContent: "center",
            fontWeight: fontWeight,
            position: "static",
            height: "inherit",
            "&.past": {
              cursor: "initial !important",
              pointerEvents: "none",
            },
          },
          ".rdrDayToday .rdrDayNumber": {
            "& span": {
              zIndex: 1,
              color: "#6e0d13",
              "&::after": {
                width: "2rem",
                height: "2rem",
                background: "#FEEBDC",
                borderRadius: "10000px",
                zIndex: "-1",
                top: "2px",
                ...todayStyles,
              },
            },
          },
        },
      }}
      {...props}
    >
      <Calendar
        dragSelectionEnabled={false}
        showMonthAndYearPickers={false}
        dayContentRenderer={customRender}
        showPreview={false}
        onChange={(date) => {
          const result =
            isSameDay(new Date(2023, 7, 31), new Date(date)) ||
            isSameDay(new Date(2023, 8, 1), new Date(date));
          if (result) navigate("/cause-list");
        }}
        // disabledDates={disabled}
      />
      {showCloseButton && (
        <Text
          position={"absolute"}
          color={"#898989"}
          bottom={"1rem"}
          onClick={() => setShowCalendar(false)}
          fontSize={"xs"}
          right="2rem"
          cursor={"pointer"}
        >
          Close
        </Text>
      )}
    </Flex>
  );
};

export default CustomCalendar;
