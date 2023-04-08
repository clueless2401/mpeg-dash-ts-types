/***********
generated template classes for ./DASH-MPD.xsd 4/8/2023, 11:46:15 PM
***********/





export class DASH_MPD {
    public mPD: MPD;

    public constructor(props?: DASH_MPD) {
        this["@class"] = ".DASH_MPD";


        if (props) {

        	this.mPD = props.mPD;
        }
    }
}

export class MPDtype {
    public ProgramInformation?: ProgramInformationType[];
    public BaseURL?: BaseURLType[];
    public Location?: AnyURI[];
    public Period: PeriodType[];
    public Metrics?: MetricsType[];
    public EssentialProperty?: DescriptorType[];
    public SupplementalProperty?: DescriptorType[];
    public UTCTiming?: DescriptorType[];
    public $id: string;
    public $profiles: string;
    public $type: PresentationType;
    public $availabilityStartTime: Date;
    public $availabilityEndTime: Date;
    public $publishTime: Date;
    public $mediaPresentationDuration: Duration;
    public $minimumUpdatePeriod: Duration;
    public $minBufferTime: Duration;
    public $timeShiftBufferDepth: Duration;
    public $suggestedPresentationDelay: Duration;
    public $maxSegmentDuration: Duration;
    public $maxSubsegmentDuration: Duration;

    public constructor(props?: MPDtype) {
        this["@class"] = ".MPDtype";


        if (props) {

        	this.ProgramInformation = props.ProgramInformation?.map(o => new ProgramInformationType(o));
        	this.BaseURL = props.BaseURL?.map(o => new BaseURLType(o));
        	this.Location = props.Location?.map(o => o);
        	this.Period = props.Period?.map(o => new PeriodType(o));
        	this.Metrics = props.Metrics?.map(o => new MetricsType(o));
        	this.EssentialProperty = props.EssentialProperty?.map(o => new DescriptorType(o));
        	this.SupplementalProperty = props.SupplementalProperty?.map(o => new DescriptorType(o));
        	this.UTCTiming = props.UTCTiming?.map(o => new DescriptorType(o));
        	this.$id = props.$id;
        	this.$profiles = props.$profiles;
        	this.$type = props.$type;
        	this.$availabilityStartTime = props.$availabilityStartTime;
        	this.$availabilityEndTime = props.$availabilityEndTime;
        	this.$publishTime = props.$publishTime;
        	this.$mediaPresentationDuration = props.$mediaPresentationDuration;
        	this.$minimumUpdatePeriod = props.$minimumUpdatePeriod;
        	this.$minBufferTime = props.$minBufferTime;
        	this.$timeShiftBufferDepth = props.$timeShiftBufferDepth;
        	this.$suggestedPresentationDelay = props.$suggestedPresentationDelay;
        	this.$maxSegmentDuration = props.$maxSegmentDuration;
        	this.$maxSubsegmentDuration = props.$maxSubsegmentDuration;
        }
    }
}

export class PeriodType {
    public BaseURL?: BaseURLType[];
    public SegmentBase?: SegmentBaseType;
    public SegmentList?: SegmentURLType[];
    public SegmentTemplate?: SegmentTemplateType;
    public AssetIdentifier?: DescriptorType;
    public EventStream?: EventStreamType[];
    public AdaptationSet?: AdaptationSetType[];
    public Subset?: SubsetType[];
    public SupplementalProperty?: DescriptorType[];
    public $undefined: any;
    public $undefined: any;
    public $id: string;
    public $start: Duration;
    public $duration: Duration;
    public $bitstreamSwitching: boolean;

    public constructor(props?: PeriodType) {
        this["@class"] = ".PeriodType";


        if (props) {

        	this.BaseURL = props.BaseURL?.map(o => new BaseURLType(o));
        	this.SegmentBase = (props.SegmentBase) ? new SegmentBaseType(props.SegmentBase): undefined;
        	this.SegmentList = props.SegmentList?.map(o => new SegmentURLType(o));
        	this.SegmentTemplate = (props.SegmentTemplate) ? new SegmentTemplateType(props.SegmentTemplate): undefined;
        	this.AssetIdentifier = (props.AssetIdentifier) ? new DescriptorType(props.AssetIdentifier): undefined;
        	this.EventStream = props.EventStream?.map(o => new EventStreamType(o));
        	this.AdaptationSet = props.AdaptationSet?.map(o => new AdaptationSetType(o));
        	this.Subset = props.Subset?.map(o => new SubsetType(o));
        	this.SupplementalProperty = props.SupplementalProperty?.map(o => new DescriptorType(o));
        	this.$undefined = props.$undefined;
        	this.$undefined = props.$undefined;
        	this.$id = props.$id;
        	this.$start = props.$start;
        	this.$duration = props.$duration;
        	this.$bitstreamSwitching = props.$bitstreamSwitching;
        }
    }
}

export class EventStreamType {
    public Event?: EventType[];
    public $undefined: any;
    public $undefined: any;
    public $schemeIdUri: AnyURI;
    public $value: string;
    public $timescale: UnsignedInt;

    public constructor(props?: EventStreamType) {
        this["@class"] = ".EventStreamType";


        if (props) {

        	this.Event = props.Event?.map(o => new EventType(o));
        	this.$undefined = props.$undefined;
        	this.$undefined = props.$undefined;
        	this.$schemeIdUri = props.$schemeIdUri;
        	this.$value = props.$value;
        	this.$timescale = props.$timescale;
        }
    }
}

export class EventType {
    public $presentationTime: UnsignedLong;
    public $duration: UnsignedLong;
    public $id: UnsignedInt;
    public $messageData: string;

    public constructor(props?: EventType) {
        this["@class"] = ".EventType";


        if (props) {

        	this.$presentationTime = props.$presentationTime;
        	this.$duration = props.$duration;
        	this.$id = props.$id;
        	this.$messageData = props.$messageData;
        }
    }
}

export class ContentComponentType {
    public Accessibility?: DescriptorType[];
    public Role?: DescriptorType[];
    public Rating?: DescriptorType[];
    public Viewpoint?: DescriptorType[];
    public $id: UnsignedInt;
    public $lang: Language;
    public $contentType: string;
    public $par: RatioType;

    public constructor(props?: ContentComponentType) {
        this["@class"] = ".ContentComponentType";


        if (props) {

        	this.Accessibility = props.Accessibility?.map(o => new DescriptorType(o));
        	this.Role = props.Role?.map(o => new DescriptorType(o));
        	this.Rating = props.Rating?.map(o => new DescriptorType(o));
        	this.Viewpoint = props.Viewpoint?.map(o => new DescriptorType(o));
        	this.$id = props.$id;
        	this.$lang = props.$lang;
        	this.$contentType = props.$contentType;
        	this.$par = props.$par;
        }
    }
}

export class SubRepresentationType {
    public constructor(props?: SubRepresentationType) {
        this["@class"] = ".SubRepresentationType";
    }
}

export class RepresentationBaseType {
    public FramePacking?: DescriptorType[];
    public AudioChannelConfiguration?: DescriptorType[];
    public ContentProtection?: DescriptorType[];
    public EssentialProperty?: DescriptorType[];
    public SupplementalProperty?: DescriptorType[];
    public InbandEventStream?: EventStreamType[];
    public $profiles: string;
    public $width: UnsignedInt;
    public $height: UnsignedInt;
    public $sar: RatioType;
    public $frameRate: FrameRateType;
    public $audioSamplingRate: string;
    public $mimeType: string;
    public $segmentProfiles: string;
    public $codecs: string;
    public $maximumSAPPeriod: number;
    public $startWithSAP: SAPType;
    public $maxPlayoutRate: number;
    public $codingDependency: boolean;
    public $scanType: VideoScanType;

    public constructor(props?: RepresentationBaseType) {
        this["@class"] = ".RepresentationBaseType";


        if (props) {

        	this.FramePacking = props.FramePacking?.map(o => new DescriptorType(o));
        	this.AudioChannelConfiguration = props.AudioChannelConfiguration?.map(o => new DescriptorType(o));
        	this.ContentProtection = props.ContentProtection?.map(o => new DescriptorType(o));
        	this.EssentialProperty = props.EssentialProperty?.map(o => new DescriptorType(o));
        	this.SupplementalProperty = props.SupplementalProperty?.map(o => new DescriptorType(o));
        	this.InbandEventStream = props.InbandEventStream?.map(o => new EventStreamType(o));
        	this.$profiles = props.$profiles;
        	this.$width = props.$width;
        	this.$height = props.$height;
        	this.$sar = props.$sar;
        	this.$frameRate = props.$frameRate;
        	this.$audioSamplingRate = props.$audioSamplingRate;
        	this.$mimeType = props.$mimeType;
        	this.$segmentProfiles = props.$segmentProfiles;
        	this.$codecs = props.$codecs;
        	this.$maximumSAPPeriod = props.$maximumSAPPeriod;
        	this.$startWithSAP = props.$startWithSAP;
        	this.$maxPlayoutRate = props.$maxPlayoutRate;
        	this.$codingDependency = props.$codingDependency;
        	this.$scanType = props.$scanType;
        }
    }
}

export class SubsetType {
    public $contains: UIntVectorType;
    public $id: string;

    public constructor(props?: SubsetType) {
        this["@class"] = ".SubsetType";


        if (props) {

        	this.$contains = props.$contains;
        	this.$id = props.$id;
        }
    }
}

export class SegmentBaseType {
    public Initialization?: URLType;
    public RepresentationIndex?: URLType;
    public $timescale: UnsignedInt;
    public $presentationTimeOffset: UnsignedLong;
    public $indexRange: string;
    public $indexRangeExact: boolean;
    public $availabilityTimeOffset: number;
    public $availabilityTimeComplete: boolean;

    public constructor(props?: SegmentBaseType) {
        this["@class"] = ".SegmentBaseType";


        if (props) {

        	this.Initialization = (props.Initialization) ? new URLType(props.Initialization): undefined;
        	this.RepresentationIndex = (props.RepresentationIndex) ? new URLType(props.RepresentationIndex): undefined;
        	this.$timescale = props.$timescale;
        	this.$presentationTimeOffset = props.$presentationTimeOffset;
        	this.$indexRange = props.$indexRange;
        	this.$indexRangeExact = props.$indexRangeExact;
        	this.$availabilityTimeOffset = props.$availabilityTimeOffset;
        	this.$availabilityTimeComplete = props.$availabilityTimeComplete;
        }
    }
}

export class URLType {
    public $sourceURL: AnyURI;
    public $range: string;

    public constructor(props?: URLType) {
        this["@class"] = ".URLType";


        if (props) {

        	this.$sourceURL = props.$sourceURL;
        	this.$range = props.$range;
        }
    }
}

export class SegmentURLType {
    public $media: AnyURI;
    public $mediaRange: string;
    public $index: AnyURI;
    public $indexRange: string;

    public constructor(props?: SegmentURLType) {
        this["@class"] = ".SegmentURLType";


        if (props) {

        	this.$media = props.$media;
        	this.$mediaRange = props.$mediaRange;
        	this.$index = props.$index;
        	this.$indexRange = props.$indexRange;
        }
    }
}

export class SegmentTemplateType {
    public constructor(props?: SegmentTemplateType) {
        this["@class"] = ".SegmentTemplateType";
    }
}

export class SegmentTimelineType {
    public constructor(props?: SegmentTimelineType) {
        this["@class"] = ".SegmentTimelineType";
    }
}

export class BaseURLType {
    public constructor(props?: BaseURLType) {
        this["@class"] = ".BaseURLType";
    }
}

export class ProgramInformationType {
    public Title?: string;
    public Source?: string;
    public Copyright?: string;
    public $lang: Language;
    public $moreInformationURL: AnyURI;

    public constructor(props?: ProgramInformationType) {
        this["@class"] = ".ProgramInformationType";


        if (props) {

        	this.Title = props.Title;
        	this.Source = props.Source;
        	this.Copyright = props.Copyright;
        	this.$lang = props.$lang;
        	this.$moreInformationURL = props.$moreInformationURL;
        }
    }
}

export class DescriptorType {
    public $schemeIdUri: AnyURI;
    public $value: string;
    public $id: string;

    public constructor(props?: DescriptorType) {
        this["@class"] = ".DescriptorType";


        if (props) {

        	this.$schemeIdUri = props.$schemeIdUri;
        	this.$value = props.$value;
        	this.$id = props.$id;
        }
    }
}

export class MetricsType {
    public Reporting: DescriptorType[];
    public Range?: RangeType[];
    public $metrics: string;

    public constructor(props?: MetricsType) {
        this["@class"] = ".MetricsType";


        if (props) {

        	this.Reporting = props.Reporting?.map(o => new DescriptorType(o));
        	this.Range = props.Range?.map(o => new RangeType(o));
        	this.$metrics = props.$metrics;
        }
    }
}

export class RangeType {
    public $starttime: Duration;
    public $duration: Duration;

    public constructor(props?: RangeType) {
        this["@class"] = ".RangeType";


        if (props) {

        	this.$starttime = props.$starttime;
        	this.$duration = props.$duration;
        }
    }
}

export class AdaptationSetType extends RepresentationBaseType {
    public Accessibility?: DescriptorType[];
    public Role?: DescriptorType[];
    public Rating?: DescriptorType[];
    public Viewpoint?: DescriptorType[];
    public ContentComponent?: ContentComponentType[];
    public BaseURL?: BaseURLType[];
    public SegmentBase?: SegmentBaseType;
    public SegmentList?: SegmentURLType[];
    public SegmentTemplate?: SegmentTemplateType;
    public Representation?: RepresentationType[];

    public constructor(props?: AdaptationSetType) {
        super(props);

        this["@class"] = ".AdaptationSetType";


        if (props) {

        	this.Accessibility = props.Accessibility?.map(o => new DescriptorType(o));
        	this.Role = props.Role?.map(o => new DescriptorType(o));
        	this.Rating = props.Rating?.map(o => new DescriptorType(o));
        	this.Viewpoint = props.Viewpoint?.map(o => new DescriptorType(o));
        	this.ContentComponent = props.ContentComponent?.map(o => new ContentComponentType(o));
        	this.BaseURL = props.BaseURL?.map(o => new BaseURLType(o));
        	this.SegmentBase = (props.SegmentBase) ? new SegmentBaseType(props.SegmentBase): undefined;
        	this.SegmentList = props.SegmentList?.map(o => new SegmentURLType(o));
        	this.SegmentTemplate = (props.SegmentTemplate) ? new SegmentTemplateType(props.SegmentTemplate): undefined;
        	this.Representation = props.Representation?.map(o => new RepresentationType(o));
        }
    }
}

export class RepresentationType extends RepresentationBaseType {
    public BaseURL?: BaseURLType[];
    public SubRepresentation?: SubRepresentationType[];
    public SegmentBase?: SegmentBaseType;
    public SegmentList?: SegmentURLType[];
    public SegmentTemplate?: SegmentTemplateType;

    public constructor(props?: RepresentationType) {
        super(props);

        this["@class"] = ".RepresentationType";


        if (props) {

        	this.BaseURL = props.BaseURL?.map(o => new BaseURLType(o));
        	this.SubRepresentation = props.SubRepresentation?.map(o => new SubRepresentationType(o));
        	this.SegmentBase = (props.SegmentBase) ? new SegmentBaseType(props.SegmentBase): undefined;
        	this.SegmentList = props.SegmentList?.map(o => new SegmentURLType(o));
        	this.SegmentTemplate = (props.SegmentTemplate) ? new SegmentTemplateType(props.SegmentTemplate): undefined;
        }
    }
}

export class MultipleSegmentBaseType extends SegmentBaseType {
    public SegmentTimeline?: SegmentTimelineType;
    public BitstreamSwitching?: URLType;

    public constructor(props?: MultipleSegmentBaseType) {
        super(props);

        this["@class"] = ".MultipleSegmentBaseType";


        if (props) {

        	this.SegmentTimeline = (props.SegmentTimeline) ? new SegmentTimelineType(props.SegmentTimeline): undefined;
        	this.BitstreamSwitching = (props.BitstreamSwitching) ? new URLType(props.BitstreamSwitching): undefined;
        }
    }
}

enum PresentationType {
    static = "static",
    dynamic = "dynamic"
}

enum VideoScanType {
    progressive = "progressive",
    interlaced = "interlaced",
    unknown = "unknown"
}

export type MPD = MPDtype;
export type RatioType = string;
export type FrameRateType = string;
export type StringNoWhitespaceType = string;
