"use strict";
/***********
generated template classes for ./DASH-MPD.xsd 4/8/2023, 11:46:15 PM
***********/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleSegmentBaseType = exports.RepresentationType = exports.AdaptationSetType = exports.RangeType = exports.MetricsType = exports.DescriptorType = exports.ProgramInformationType = exports.BaseURLType = exports.SegmentTimelineType = exports.SegmentTemplateType = exports.SegmentURLType = exports.URLType = exports.SegmentBaseType = exports.SubsetType = exports.RepresentationBaseType = exports.SubRepresentationType = exports.ContentComponentType = exports.EventType = exports.EventStreamType = exports.PeriodType = exports.MPDtype = exports.DASH_MPD = void 0;
var DASH_MPD = /** @class */ (function () {
    function DASH_MPD(props) {
        this["@class"] = ".DASH_MPD";
        if (props) {
            this.mPD = props.mPD;
        }
    }
    return DASH_MPD;
}());
exports.DASH_MPD = DASH_MPD;
var MPDtype = /** @class */ (function () {
    function MPDtype(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this["@class"] = ".MPDtype";
        if (props) {
            this.ProgramInformation = (_a = props.ProgramInformation) === null || _a === void 0 ? void 0 : _a.map(function (o) { return new ProgramInformationType(o); });
            this.BaseURL = (_b = props.BaseURL) === null || _b === void 0 ? void 0 : _b.map(function (o) { return new BaseURLType(o); });
            this.Location = (_c = props.Location) === null || _c === void 0 ? void 0 : _c.map(function (o) { return o; });
            this.Period = (_d = props.Period) === null || _d === void 0 ? void 0 : _d.map(function (o) { return new PeriodType(o); });
            this.Metrics = (_e = props.Metrics) === null || _e === void 0 ? void 0 : _e.map(function (o) { return new MetricsType(o); });
            this.EssentialProperty = (_f = props.EssentialProperty) === null || _f === void 0 ? void 0 : _f.map(function (o) { return new DescriptorType(o); });
            this.SupplementalProperty = (_g = props.SupplementalProperty) === null || _g === void 0 ? void 0 : _g.map(function (o) { return new DescriptorType(o); });
            this.UTCTiming = (_h = props.UTCTiming) === null || _h === void 0 ? void 0 : _h.map(function (o) { return new DescriptorType(o); });
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
    return MPDtype;
}());
exports.MPDtype = MPDtype;
var PeriodType = /** @class */ (function () {
    function PeriodType(props) {
        var _a, _b, _c, _d, _e, _f;
        this["@class"] = ".PeriodType";
        if (props) {
            this.BaseURL = (_a = props.BaseURL) === null || _a === void 0 ? void 0 : _a.map(function (o) { return new BaseURLType(o); });
            this.SegmentBase = (props.SegmentBase) ? new SegmentBaseType(props.SegmentBase) : undefined;
            this.SegmentList = (_b = props.SegmentList) === null || _b === void 0 ? void 0 : _b.map(function (o) { return new SegmentURLType(o); });
            this.SegmentTemplate = (props.SegmentTemplate) ? new SegmentTemplateType(props.SegmentTemplate) : undefined;
            this.AssetIdentifier = (props.AssetIdentifier) ? new DescriptorType(props.AssetIdentifier) : undefined;
            this.EventStream = (_c = props.EventStream) === null || _c === void 0 ? void 0 : _c.map(function (o) { return new EventStreamType(o); });
            this.AdaptationSet = (_d = props.AdaptationSet) === null || _d === void 0 ? void 0 : _d.map(function (o) { return new AdaptationSetType(o); });
            this.Subset = (_e = props.Subset) === null || _e === void 0 ? void 0 : _e.map(function (o) { return new SubsetType(o); });
            this.SupplementalProperty = (_f = props.SupplementalProperty) === null || _f === void 0 ? void 0 : _f.map(function (o) { return new DescriptorType(o); });
            this.$undefined = props.$undefined;
            this.$undefined = props.$undefined;
            this.$id = props.$id;
            this.$start = props.$start;
            this.$duration = props.$duration;
            this.$bitstreamSwitching = props.$bitstreamSwitching;
        }
    }
    return PeriodType;
}());
exports.PeriodType = PeriodType;
var EventStreamType = /** @class */ (function () {
    function EventStreamType(props) {
        var _a;
        this["@class"] = ".EventStreamType";
        if (props) {
            this.Event = (_a = props.Event) === null || _a === void 0 ? void 0 : _a.map(function (o) { return new EventType(o); });
            this.$undefined = props.$undefined;
            this.$undefined = props.$undefined;
            this.$schemeIdUri = props.$schemeIdUri;
            this.$value = props.$value;
            this.$timescale = props.$timescale;
        }
    }
    return EventStreamType;
}());
exports.EventStreamType = EventStreamType;
var EventType = /** @class */ (function () {
    function EventType(props) {
        this["@class"] = ".EventType";
        if (props) {
            this.$presentationTime = props.$presentationTime;
            this.$duration = props.$duration;
            this.$id = props.$id;
            this.$messageData = props.$messageData;
        }
    }
    return EventType;
}());
exports.EventType = EventType;
var ContentComponentType = /** @class */ (function () {
    function ContentComponentType(props) {
        var _a, _b, _c, _d;
        this["@class"] = ".ContentComponentType";
        if (props) {
            this.Accessibility = (_a = props.Accessibility) === null || _a === void 0 ? void 0 : _a.map(function (o) { return new DescriptorType(o); });
            this.Role = (_b = props.Role) === null || _b === void 0 ? void 0 : _b.map(function (o) { return new DescriptorType(o); });
            this.Rating = (_c = props.Rating) === null || _c === void 0 ? void 0 : _c.map(function (o) { return new DescriptorType(o); });
            this.Viewpoint = (_d = props.Viewpoint) === null || _d === void 0 ? void 0 : _d.map(function (o) { return new DescriptorType(o); });
            this.$id = props.$id;
            this.$lang = props.$lang;
            this.$contentType = props.$contentType;
            this.$par = props.$par;
        }
    }
    return ContentComponentType;
}());
exports.ContentComponentType = ContentComponentType;
var SubRepresentationType = /** @class */ (function () {
    function SubRepresentationType(props) {
        this["@class"] = ".SubRepresentationType";
    }
    return SubRepresentationType;
}());
exports.SubRepresentationType = SubRepresentationType;
var RepresentationBaseType = /** @class */ (function () {
    function RepresentationBaseType(props) {
        var _a, _b, _c, _d, _e, _f;
        this["@class"] = ".RepresentationBaseType";
        if (props) {
            this.FramePacking = (_a = props.FramePacking) === null || _a === void 0 ? void 0 : _a.map(function (o) { return new DescriptorType(o); });
            this.AudioChannelConfiguration = (_b = props.AudioChannelConfiguration) === null || _b === void 0 ? void 0 : _b.map(function (o) { return new DescriptorType(o); });
            this.ContentProtection = (_c = props.ContentProtection) === null || _c === void 0 ? void 0 : _c.map(function (o) { return new DescriptorType(o); });
            this.EssentialProperty = (_d = props.EssentialProperty) === null || _d === void 0 ? void 0 : _d.map(function (o) { return new DescriptorType(o); });
            this.SupplementalProperty = (_e = props.SupplementalProperty) === null || _e === void 0 ? void 0 : _e.map(function (o) { return new DescriptorType(o); });
            this.InbandEventStream = (_f = props.InbandEventStream) === null || _f === void 0 ? void 0 : _f.map(function (o) { return new EventStreamType(o); });
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
    return RepresentationBaseType;
}());
exports.RepresentationBaseType = RepresentationBaseType;
var SubsetType = /** @class */ (function () {
    function SubsetType(props) {
        this["@class"] = ".SubsetType";
        if (props) {
            this.$contains = props.$contains;
            this.$id = props.$id;
        }
    }
    return SubsetType;
}());
exports.SubsetType = SubsetType;
var SegmentBaseType = /** @class */ (function () {
    function SegmentBaseType(props) {
        this["@class"] = ".SegmentBaseType";
        if (props) {
            this.Initialization = (props.Initialization) ? new URLType(props.Initialization) : undefined;
            this.RepresentationIndex = (props.RepresentationIndex) ? new URLType(props.RepresentationIndex) : undefined;
            this.$timescale = props.$timescale;
            this.$presentationTimeOffset = props.$presentationTimeOffset;
            this.$indexRange = props.$indexRange;
            this.$indexRangeExact = props.$indexRangeExact;
            this.$availabilityTimeOffset = props.$availabilityTimeOffset;
            this.$availabilityTimeComplete = props.$availabilityTimeComplete;
        }
    }
    return SegmentBaseType;
}());
exports.SegmentBaseType = SegmentBaseType;
var URLType = /** @class */ (function () {
    function URLType(props) {
        this["@class"] = ".URLType";
        if (props) {
            this.$sourceURL = props.$sourceURL;
            this.$range = props.$range;
        }
    }
    return URLType;
}());
exports.URLType = URLType;
var SegmentURLType = /** @class */ (function () {
    function SegmentURLType(props) {
        this["@class"] = ".SegmentURLType";
        if (props) {
            this.$media = props.$media;
            this.$mediaRange = props.$mediaRange;
            this.$index = props.$index;
            this.$indexRange = props.$indexRange;
        }
    }
    return SegmentURLType;
}());
exports.SegmentURLType = SegmentURLType;
var SegmentTemplateType = /** @class */ (function () {
    function SegmentTemplateType(props) {
        this["@class"] = ".SegmentTemplateType";
    }
    return SegmentTemplateType;
}());
exports.SegmentTemplateType = SegmentTemplateType;
var SegmentTimelineType = /** @class */ (function () {
    function SegmentTimelineType(props) {
        this["@class"] = ".SegmentTimelineType";
    }
    return SegmentTimelineType;
}());
exports.SegmentTimelineType = SegmentTimelineType;
var BaseURLType = /** @class */ (function () {
    function BaseURLType(props) {
        this["@class"] = ".BaseURLType";
    }
    return BaseURLType;
}());
exports.BaseURLType = BaseURLType;
var ProgramInformationType = /** @class */ (function () {
    function ProgramInformationType(props) {
        this["@class"] = ".ProgramInformationType";
        if (props) {
            this.Title = props.Title;
            this.Source = props.Source;
            this.Copyright = props.Copyright;
            this.$lang = props.$lang;
            this.$moreInformationURL = props.$moreInformationURL;
        }
    }
    return ProgramInformationType;
}());
exports.ProgramInformationType = ProgramInformationType;
var DescriptorType = /** @class */ (function () {
    function DescriptorType(props) {
        this["@class"] = ".DescriptorType";
        if (props) {
            this.$schemeIdUri = props.$schemeIdUri;
            this.$value = props.$value;
            this.$id = props.$id;
        }
    }
    return DescriptorType;
}());
exports.DescriptorType = DescriptorType;
var MetricsType = /** @class */ (function () {
    function MetricsType(props) {
        var _a, _b;
        this["@class"] = ".MetricsType";
        if (props) {
            this.Reporting = (_a = props.Reporting) === null || _a === void 0 ? void 0 : _a.map(function (o) { return new DescriptorType(o); });
            this.Range = (_b = props.Range) === null || _b === void 0 ? void 0 : _b.map(function (o) { return new RangeType(o); });
            this.$metrics = props.$metrics;
        }
    }
    return MetricsType;
}());
exports.MetricsType = MetricsType;
var RangeType = /** @class */ (function () {
    function RangeType(props) {
        this["@class"] = ".RangeType";
        if (props) {
            this.$starttime = props.$starttime;
            this.$duration = props.$duration;
        }
    }
    return RangeType;
}());
exports.RangeType = RangeType;
var AdaptationSetType = /** @class */ (function (_super) {
    __extends(AdaptationSetType, _super);
    function AdaptationSetType(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var _this = _super.call(this, props) || this;
        _this["@class"] = ".AdaptationSetType";
        if (props) {
            _this.Accessibility = (_a = props.Accessibility) === null || _a === void 0 ? void 0 : _a.map(function (o) { return new DescriptorType(o); });
            _this.Role = (_b = props.Role) === null || _b === void 0 ? void 0 : _b.map(function (o) { return new DescriptorType(o); });
            _this.Rating = (_c = props.Rating) === null || _c === void 0 ? void 0 : _c.map(function (o) { return new DescriptorType(o); });
            _this.Viewpoint = (_d = props.Viewpoint) === null || _d === void 0 ? void 0 : _d.map(function (o) { return new DescriptorType(o); });
            _this.ContentComponent = (_e = props.ContentComponent) === null || _e === void 0 ? void 0 : _e.map(function (o) { return new ContentComponentType(o); });
            _this.BaseURL = (_f = props.BaseURL) === null || _f === void 0 ? void 0 : _f.map(function (o) { return new BaseURLType(o); });
            _this.SegmentBase = (props.SegmentBase) ? new SegmentBaseType(props.SegmentBase) : undefined;
            _this.SegmentList = (_g = props.SegmentList) === null || _g === void 0 ? void 0 : _g.map(function (o) { return new SegmentURLType(o); });
            _this.SegmentTemplate = (props.SegmentTemplate) ? new SegmentTemplateType(props.SegmentTemplate) : undefined;
            _this.Representation = (_h = props.Representation) === null || _h === void 0 ? void 0 : _h.map(function (o) { return new RepresentationType(o); });
        }
        return _this;
    }
    return AdaptationSetType;
}(RepresentationBaseType));
exports.AdaptationSetType = AdaptationSetType;
var RepresentationType = /** @class */ (function (_super) {
    __extends(RepresentationType, _super);
    function RepresentationType(props) {
        var _a, _b, _c;
        var _this = _super.call(this, props) || this;
        _this["@class"] = ".RepresentationType";
        if (props) {
            _this.BaseURL = (_a = props.BaseURL) === null || _a === void 0 ? void 0 : _a.map(function (o) { return new BaseURLType(o); });
            _this.SubRepresentation = (_b = props.SubRepresentation) === null || _b === void 0 ? void 0 : _b.map(function (o) { return new SubRepresentationType(o); });
            _this.SegmentBase = (props.SegmentBase) ? new SegmentBaseType(props.SegmentBase) : undefined;
            _this.SegmentList = (_c = props.SegmentList) === null || _c === void 0 ? void 0 : _c.map(function (o) { return new SegmentURLType(o); });
            _this.SegmentTemplate = (props.SegmentTemplate) ? new SegmentTemplateType(props.SegmentTemplate) : undefined;
        }
        return _this;
    }
    return RepresentationType;
}(RepresentationBaseType));
exports.RepresentationType = RepresentationType;
var MultipleSegmentBaseType = /** @class */ (function (_super) {
    __extends(MultipleSegmentBaseType, _super);
    function MultipleSegmentBaseType(props) {
        var _this = _super.call(this, props) || this;
        _this["@class"] = ".MultipleSegmentBaseType";
        if (props) {
            _this.SegmentTimeline = (props.SegmentTimeline) ? new SegmentTimelineType(props.SegmentTimeline) : undefined;
            _this.BitstreamSwitching = (props.BitstreamSwitching) ? new URLType(props.BitstreamSwitching) : undefined;
        }
        return _this;
    }
    return MultipleSegmentBaseType;
}(SegmentBaseType));
exports.MultipleSegmentBaseType = MultipleSegmentBaseType;
var PresentationType;
(function (PresentationType) {
    PresentationType["static"] = "static";
    PresentationType["dynamic"] = "dynamic";
})(PresentationType || (PresentationType = {}));
var VideoScanType;
(function (VideoScanType) {
    VideoScanType["progressive"] = "progressive";
    VideoScanType["interlaced"] = "interlaced";
    VideoScanType["unknown"] = "unknown";
})(VideoScanType || (VideoScanType = {}));
//# sourceMappingURL=DASH-MPD.js.map