import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MicWarning extends StatelessWidget {
  const MicWarning({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MicWarning.svg');
}
