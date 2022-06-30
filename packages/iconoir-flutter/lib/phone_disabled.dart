import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PhoneDisabled extends StatelessWidget {
  const PhoneDisabled({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PhoneDisabled.svg');
}
