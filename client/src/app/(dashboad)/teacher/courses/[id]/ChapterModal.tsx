/** @format */
import { CustomFormField } from "@/components/CustomFormField";
import CustomModal from "@/components/CustomModal";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChapterFormData, chapterSchema } from "@/lib/schemas";
import { addChapter, closeChapterModal, editChapter } from "@/state";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

const ChapterModal = () => {
    const dispatch = useAppDispatch();
    const {
        isChapterModalOpen,
        selectedSectionIndex,
        selectedChapterIndex,
        sections,
    } = useAppSelector((state) => state.global.courseEditor);

    const chapter: Chapter | undefined =
        selectedSectionIndex !== null && selectedChapterIndex !== null
            ? sections[selectedSectionIndex].chapters[selectedChapterIndex]
            : undefined;

    const methods = useForm<ChapterFormData>({
        resolver: zodResolver(chapterSchema),
        defaultValues: {
            title: "",
            content: "",
            video: "",
        },
    });

    useEffect(() => {
        if (chapter) {
            methods.reset({
                title: chapter.title,
                content: chapter.content,
                video: chapter.video || "",
            });
        } else {
            methods.reset({
                title: "",
                content: "",
                video: "",
            });
        }
    }, [chapter, methods]);

    const onClose = () => {
        dispatch(closeChapterModal());
    };

    const onSubmit = async (data: ChapterFormData) => {
        if (selectedSectionIndex == null) return;

        const newchapter: Chapter = {
            chapterId: uuidv4(),
            title: data.title,
            content: data.content,
            video: data.video,
            type: data.video ? "Video" : "Text",
        };

        if (selectedChapterIndex === null) {
            dispatch(
                addChapter({
                    sectionIndex: selectedSectionIndex,
                    chapter: newchapter,
                })
            );
        } else {
            dispatch(
                editChapter({
                    sectionIndex: selectedSectionIndex,
                    chapterIndex: selectedChapterIndex,
                    chapter: newchapter,
                })
            );
        }

        toast.success(
            `Chapter added/updated successfully but you need to save the course to apply the changes`
        );
        onClose();
    };

    return (
        <CustomModal isOpen={isChapterModalOpen} onClose={onClose}>
            <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold"></h2>
                    <button onClick={onClose} className="">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <Form {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <CustomFormField
                            name="title"
                            label="Chapter Title"
                            placeholder="Write Chapter title here"
                        />

                        <CustomFormField
                            name="content"
                            label="Chapter Content"
                            placeholder="Write Chapter content here"
                        />
                        <FormField
                            control={methods.control}
                            name="video"
                            render={({ field: { onChange, value } }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-200 text-sm">
                                        Chapter Video
                                    </FormLabel>
                                    <FormControl>
                                        <div>
                                            <Input
                                                type="file"
                                                accept="video/*"
                                                onChange={(e) => {
                                                    const file =
                                                        e.target.files?.[0];
                                                    if (file) {
                                                        onChange(file);
                                                    }
                                                }}
                                                className="border-none bg-gray-800 py-2 cursor-pointer"
                                            />
                                            {typeof value === "string" &&
                                                value && (
                                                    <div className="my-2 text-sm text-gray-600">
                                                        Current video:{" "}
                                                        {value.split("/").pop()}
                                                    </div>
                                                )}
                                            {value instanceof File && (
                                                <div className="my-2 text-sm text-gray-600">
                                                    Selected file: {value.name}
                                                </div>
                                            )}
                                        </div>
                                    </FormControl>
                                    <FormMessage className="text-red-400" />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end space-x-2 mt-6">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-primary-700">
                                Save
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </CustomModal>
    );
};

export default ChapterModal;
