import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Cloud extends StatelessWidget {
  const Cloud({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Cloud.svg');
}
