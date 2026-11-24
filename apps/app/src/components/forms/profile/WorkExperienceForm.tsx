import { experienceSchema } from "@foliocn/schemas/src/experienceSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"

const options = [
    {
        value: 'on-site',
        label: 'On Site'
    },
    {
        value: 'hybrid',
        label: 'Hybrid'
    },
    {
        value: 'remote',
        label: 'Remote'
    },
]

export function ExperienceForm() {
    const form = useForm<z.infer<typeof experienceSchema>>({
        resolver: zodResolver(experienceSchema),
        defaultValues: {
            title: "",
            workplaceType: "on-site",
            employmentType: "full-time",
        }
    });


    return (
        <form id="experience-form">
            <FieldGroup>
                <Controller
                    name="title"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel>Job Title</FieldLabel>
                            <Input
                                {...field}
                                id="experience-form-title"
                            />
                        </Field>
                    )}
                />
                <Controller
                    name="workplaceType"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel>Workplace Type</FieldLabel>
                            <Select
                                name={field.name}
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger className="min-w-[120px]">
                                    <SelectValue placeholder="On Site" />
                                    <SelectSeparator />
                                    <SelectContent>
                                        {options.map((item) => (
                                            <SelectItem value={item.value}>
                                                {item.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>

                                </SelectTrigger>
                            </Select>
                        </Field>
                    )}
                />
                <Controller
                    name="employmentType"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field>
                            <FieldLabel>Employment Type</FieldLabel>
                            <Select
                                name={field.name}
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger id="experience-form-workplaceType" className="min-w-[120px]">
                                    <SelectValue placeholder="On Site" />
                                    <SelectSeparator />
                                    <SelectContent>
                                        {options.map((item) => (
                                            <SelectItem value={item.value}>
                                                {item.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>

                                </SelectTrigger>
                            </Select>
                        </Field>
                    )}
                />
            </FieldGroup>

        </form>
    )
}


