import {
  AbsoluteCenter,
  Accordion,
  Blockquote,
  Breadcrumb,
  Button,
  ButtonGroup,
  Checkbox,
  Circle,
  Container,
  createToaster,
  Dialog,
  DialogBackdrop,
  Drawer,
  Field,
  Float,
  Icon,
  IconButton,
  Input,
  List,
  Menu,
  Popover,
  Portal,
  RatingGroup,
  Spinner,
  Switch,
  Tabs,
  useDialog,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "./components/ui/color-mode";
import { toaster, Toaster } from "./components/ui/toaster";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./validationSchema";
import FormComp from "./form with validation/FormComp";

function App() {
  const [loading, setLoading] = useState(false);
  const dialog = useDialog();
  const { colorMode, toggleColorMode } = useColorMode();
// u can make element darkMode always or Light mode by waping them <DarkMode>

  return (
    <div className="bg-primary">
      <Button onClick={toggleColorMode}>toggle theme : {colorMode}</Button>
      <Toaster />
      <Container
        maxW={"sm,md,xl,2xl"}
        className="flex items-start flex-col gap-y-4"
      >
        {/* accordion */}
        <Accordion.Root collapsible multiple variant={"enclosed"}>
          {items.map((item, i) => (
            <Accordion.Item key={i} value={i}>
              <Accordion.ItemTrigger className="!block !p-0">
                <Accordion.ItemTrigger
                  _expanded={{ backgroundColor: "#23272e", color: "white" }}
                  className="justify-between transition-all"
                >
                  Click me bitch <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <div className="!p-4">
                    lorem
                    loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                  </div>
                </Accordion.ItemContent>
              </Accordion.ItemTrigger>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        {/* Float-----Blockquote---circle----centered */}
        <Blockquote.Root
          className="!border-2"
          variant={"subtle"}
          colorPalette="blue"
        >
          <Float placement="top-start" offsetY="4">
            <Circle className="bg-blue-400 ">OB</Circle>
          </Float>
          <Blockquote.Content>
            If anyone thinks he is something when he is nothing, he deceives e.
          </Blockquote.Content>
          <Blockquote.Caption>— adsaadsasdsd</Blockquote.Caption>
          <AbsoluteCenter bg="tomato" axis="both">
            center
          </AbsoluteCenter>
        </Blockquote.Root>
        {/* Breadcrumb */}
        <Breadcrumb.Root>
          <Breadcrumb.List>
            {items.map((_, i) => (
              <Breadcrumb.Item key={i}>
                <Breadcrumb.Link href="#">
                  <div>|</div>Breadcrumb
                </Breadcrumb.Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb.List>
        </Breadcrumb.Root>
        {/* buttons---group---asChild */}
        <Button
          loading={loading}
          onClick={() => setLoading((prev) => !prev)}
          loadingText="Saving..."
          spinnerPlacement="end"
          // spinner={<div>custom/...</div>}
        >
          Click me
          <Float px={1} placement={"top-start"} rounded={"full"} bg={"red.600"}>
            5
          </Float>
        </Button>
        <ButtonGroup
          onClick={() =>
            toaster.create({
              placement: "top-start", //fk offall these ui libiraries eat shit
              max: 4,
              duration: 2000,
              type: "error",
              title: "yo pls",
            })
          }
          attached
        >
          <Button variant="outline">Button</Button>
          <IconButton variant="outline">^</IconButton>
        </ButtonGroup>
        <Button asChild>
          <a href="#">Button</a>
        </Button>
        {/* checkbox */}
        <Checkbox.Root variant={"solid"} colorPalette={"#032726"}>
          <Checkbox.HiddenInput />
          <Checkbox.Control className="!border-black">?</Checkbox.Control>
          <Checkbox.Label>Checkbox</Checkbox.Label>
        </Checkbox.Root>
        <CheckBoxes />
        {/* dialog */}
        <Dialog.RootProvider value={dialog} placement={"center"} size={"md"}>
          <Dialog.Trigger>
            {dialog.open ? "Close" : "Open"} Dialog
          </Dialog.Trigger>
          <Portal>
            <DialogBackdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <div className="flex w-full justify-between">
                    something
                    <Dialog.CloseTrigger>X</Dialog.CloseTrigger>
                  </div>
                </Dialog.Header>
                <Dialog.Body>
                  loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                </Dialog.Body>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.RootProvider>
        {/* drawer */}
        <Button onClick={() => dialog.setOpen((prev) => !prev)}>
          dialog trigger outside the comp
        </Button>
        <Drawer.Root
          placement={"start"}
          onOpenChange={(e) => setLoading(e.open)}
          open={loading}
          // u can give it a custom controlabel state same with modal also
        >
          {/* same shit as modal */}
        </Drawer.Root>
        {/* field */}
        <Field.Root invalid={true}>
          <Field.Label>label</Field.Label>
          <Input />
          <Field.ErrorText />
        </Field.Root>
        {/* form with validation and shit */}
        <FormComp />
        {/* list */}
        <List.Root variant={"plain"}>
          {items.map((_, i) => (
            <List.Item key={i}>
              <List.Indicator>*</List.Indicator>
              loremloremloremloremloremloremloremloremloremloremloremlo
            </List.Item>
          ))}
        </List.Root>
        {/* Menu */}
        <Menu.Root variant={"subtle"}>
          <Menu.Trigger asChild>
            <Button>open Menu</Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {items.map((_, i) => (
                  <Menu.Item key={i}>lorem loremloremloremlorem</Menu.Item>
                ))}
                <Menu.Root>
                  <Menu.TriggerItem>more :</Menu.TriggerItem>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content>
                        {items.map((_, i) => (
                          <Menu.Item key={i}>
                            lorem loremloremloremlorem
                          </Menu.Item>
                        ))}
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
        {/*  loader*/}
        <Spinner size="sm" color="red.500" />
        {/* popover */}
        <Popover.Root>
          <Popover.Trigger>yo</Popover.Trigger>
          {/* u know portal,posisinorer and content */}
          <Popover.Arrow />
        </Popover.Root>
        {/* switch */}
        <div>
          <Switch.Root>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label>Activate Chakra</Switch.Label>
          </Switch.Root>
          {/* cooler one */}
          <Switch.Root colorPalette="black" size="lg">
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
              <Switch.Indicator
                fallback={<Icon as={FaMoon} color="gray.400" />}
              >
                <Icon as={FaSun} color="yellow.400" />
              </Switch.Indicator>
            </Switch.Control>
            <Switch.Label>Switch me</Switch.Label>
          </Switch.Root>
        </div>
        {/* tabs */}
        <Tabs.Root defaultValue="members" variant="plain">
          <Tabs.List rounded="l3" p="1">
            <Tabs.Trigger value="members">Members</Tabs.Trigger>
            <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
            <Tabs.Trigger value="tasks">Settings</Tabs.Trigger>
            <Tabs.Indicator
              bg={"yellow"}
              _dark={{ backgroundColor: "red.400" }}
            />
          </Tabs.List>
          <Tabs.Content value="members">Manage your team members</Tabs.Content>
          <Tabs.Content value="projects">Manage your projects</Tabs.Content>
          <Tabs.Content value="tasks">
            Manage your tasks for freelancers
          </Tabs.Content>
        </Tabs.Root>
        {/* rating */}
        <RatingGroup.Root allowHalf defaultValue={2.5} colorPalette="red">
          <RatingGroup.HiddenInput />
          <RatingGroup.Control>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingGroup.Item key={index} index={index + 1}>
                <RatingGroup.ItemIndicator icon={<BiHeart />} />
              </RatingGroup.Item>
            ))}
          </RatingGroup.Control>
        </RatingGroup.Root>
        <FormInputs />
      </Container>
    </div>
  );
}

const FormInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    // setError
    // example: setError("email",{message:error.email})
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    toaster.create({
      placement: "top-end", //fk offall these ui libiraries eat shit
      max: 4,
      duration: 2000,
      type: "success",
      title: "submited",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputsTypes.map(({ name, label, placeholder, type }) => (
        <Field.Root key={name} invalid={!!errors[name]}>
          <Field.Label>{label}</Field.Label>
          <Input {...{ placeholder, name, type, ...register(name) }} />
          <Field.ErrorText>{errors[name]?.message}</Field.ErrorText>
        </Field.Root>
      ))}
      {/* <Field.Root invalid={!!errors.fn}>
        <Field.Label>First Name</Field.Label>
        <Input {...register("fn")} placeholder="First Name" />
        <Field.ErrorText>{errors.fn?.message}</Field.ErrorText>
      </Field.Root>

      <Field.Root invalid={!!errors.ln}>
        <Field.Label>Last Name</Field.Label>
        <Input {...register("ln")} placeholder="Last Name" />
        <Field.ErrorText>{errors.ln?.message}</Field.ErrorText>
      </Field.Root>

      <Field.Root invalid={!!errors.email}>
        <Field.Label>Email</Field.Label>
        <Input {...register("email")} placeholder="Email" />
        <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
      </Field.Root>

      <Field.Root invalid={!!errors.password}>
        <Field.Label>Password</Field.Label>
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
      </Field.Root>

      <Field.Root invalid={!!errors.cpassword}>
        <Field.Label>Confirm Password</Field.Label>
        <Input
          {...register("cpassword")}
          type="password"
          placeholder="Confirm Password"
        />
        <Field.ErrorText>{errors.cpassword?.message}</Field.ErrorText>
      </Field.Root> */}

      <Button loading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

const CheckBoxes = () => {
  const [values, setValues] = useState(checkboxes);

  const allChekced = values.every((val) => val.checked);
  const someChecked = values.some((val) => val.checked) && !allChekced;

  const items = values.map((item, i) => (
    <Checkbox.Root
      ml={4}
      key={item.label}
      colorPalette={"yellow"}
      value={item.value}
      checked={item.checked}
      onCheckedChange={(e) => {
        setValues((prev) =>
          prev.map((curr, j) =>
            i === j ? { ...curr, checked: e.checked } : curr
          )
        );
        console.log(values);
      }}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>{item.label}</Checkbox.Label>
    </Checkbox.Root>
  ));

  return (
    <div className="flex flex-col gap-4">
      <Checkbox.Root
        checked={someChecked ? "indeterminate" : allChekced}
        onCheckedChange={(e) =>
          setValues((curr) =>
            curr.map((item) => ({ ...item, checked: !!e.checked }))
          )
        }
      >
        <Checkbox.Control />
        <Checkbox.HiddenInput />
        <Checkbox.Label>All</Checkbox.Label>
      </Checkbox.Root>
      {items}
    </div>
  );
};

export default App;

const items = Array.from({ length: 4 });

const checkboxes = [
  { label: "A", checked: true, value: "1" },
  { label: "B", checked: false, value: "2" },
  { label: "C", checked: false, value: "3" },
];

const defaultValues = {
  fn: "",
  ln: "",
  email: "",
  password: "",
  cpassword: "",
};

const inputsTypes = [
  {
    placeholder: "Ahmed",
    label: "First name",
    name: "fn",
    type: "text",
  },
  {
    placeholder: "Ali",
    label: "Last name",
    name: "ln",
    type: "text",
  },
  {
    placeholder: "osama@gmail.com",
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    placeholder: "Example@123",
    label: "Password",
    name: "password",
    type: "password",
  },
  {
    placeholder: "Example@123",
    label: "Confirm password",
    name: "cpassword",
    type: "password",
  },
];
