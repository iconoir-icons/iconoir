import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Download extends StatelessWidget {
  const Download({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Download.svg');
}
