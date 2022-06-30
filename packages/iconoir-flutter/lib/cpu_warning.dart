import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CpuWarning extends StatelessWidget {
  const CpuWarning({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/CpuWarning.svg');
}
