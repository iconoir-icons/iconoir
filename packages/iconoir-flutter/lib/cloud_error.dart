import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CloudError extends StatelessWidget {
  const CloudError({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/CloudError.svg');
}
