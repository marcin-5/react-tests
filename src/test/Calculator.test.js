import { fireEvent, render, screen } from "@testing-library/react";
import { Calculator } from "components/calculator";

describe("<Calculator />", () => {
  it("has 'Calculator' displayed somewhere", () => {
    render(<Calculator />);
    const textElement = screen.getByText("Calculator");
    expect(textElement.textContent).toBe("Calculator");
  });

  it("has an H1 that contains 'Calculator'", () => {
    render(<Calculator />);
    const titleElement = screen.getByRole("heading", { level: 1 });
    expect(titleElement.textContent).toBe("Calculator");
  });

  it("performs 0 + 0 = 0 by default", () => {
    render(<Calculator />);
    const { getValueA, getValueB, getOperator, getResult } = getCalculator();

    expect(getValueA()).toBe("0");
    expect(getValueB()).toBe("0");
    expect(getOperator()).toBe("+");
    expect(getResult()).toBe("0");
  });

  it("uses correctly the default values", () => {
    render(<Calculator defaultA={5} defaultB={4} defaultOperator={"x"} />);
    const { getValueA, getValueB, getOperator, getResult } = getCalculator();

    expect(getValueA()).toBe("5");
    expect(getValueB()).toBe("4");
    expect(getOperator()).toBe("x");
    expect(getResult()).toBe("20");
  });

  it("calculates correctly when the user updates an input", () => {
    render(<Calculator defaultA={5} defaultB={4} defaultOperator={"x"} />);
    fireEvent.change(screen.getByTestId("inputA"), { target: { value: "12" } });
    expect(getCalculator().getResult()).toBe("48");
    fireEvent.change(screen.getByTestId("inputB"), { target: { value: "-12" } });
    expect(getCalculator().getResult()).toBe("-144");
    fireEvent.change(screen.getByTestId("operator"), { target: { value: "+" } });
    expect(getCalculator().getResult()).toBe("0");
  });

  it("calculates correctly when the user updates an input", () => {
    render(<Calculator defaultA={12} defaultB={0} defaultOperator={"/"} />);
    expect(getCalculator().getResult()).toBe("You can't divide by 0");
  });
});

function getCalculator() {
  return {
    getValueA: () => screen.getByTestId("inputA").value,
    getValueB: () => screen.getByTestId("inputB").value,
    getOperator: () => screen.getByTestId("operator").value,
    getResult: () => screen.getByTestId("result").textContent,
  };
}
