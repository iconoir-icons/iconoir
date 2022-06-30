import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CloudCheck extends StatelessWidget {
  const CloudCheck({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/CloudCheck.svg');
}
