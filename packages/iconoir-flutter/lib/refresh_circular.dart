import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RefreshCircular extends StatelessWidget {
  const RefreshCircular({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/RefreshCircular.svg');
}
